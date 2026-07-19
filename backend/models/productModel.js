const { pool } = require('../config/db');

const ProductModel = {
    async create({ name, description, details, price, imageUrl, category, stock, rating }) {
        const [result] = await pool.query(
            'INSERT INTO products (name, description, details, price, image, category, stock, rating) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [name, description, details, price, imageUrl, category, stock, rating]
        );
        return { id: result.insertId, name, description, details, price, image: imageUrl, category, stock, rating };
    },

    async findById(id) {
        const [rows] = await pool.query('SELECT * FROM products WHERE id = ?', [id]);
        return rows[0] || null;
    },

    async findAll() {
        const [rows] = await pool.query('SELECT * FROM products ORDER BY id DESC');
        return rows;
    },

    async update(id, data = {}) {
        const fields = [];
        const values = [];
        for (const key of ['name', 'description', 'details', 'price', 'image', 'category', 'stock', 'rating']) {
            if (data[key] !== undefined) {
                fields.push(`${key} = ?`);
                values.push(data[key]);
            }
        }
        if (fields.length === 0) return this.findById(id);
        values.push(id);
        await pool.query(`UPDATE products SET ${fields.join(', ')} WHERE id = ?`, values);
        return this.findById(id);
    },

    async remove(id) {
        await pool.query('DELETE FROM products WHERE id = ?', [id]);
        return { success: true };
    },
};

module.exports = ProductModel;