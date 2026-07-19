const { pool } = require('../config/db');

const CustomerModel = {
  async create({ name, email, phone, address }) {
    const [result] = await pool.query(
      'INSERT INTO customers (name, email, phone, address) VALUES (?, ?, ?, ?)',
      [name, email, phone, address]
    );
    return { id: result.insertId, name, email, phone, address };
  },

  async findByEmail(email) {
    const [rows] = await pool.query('SELECT * FROM customers WHERE email = ?', [email]);
    return rows[0] || null;
  },

  async findById(id) {
    const [rows] = await pool.query('SELECT * FROM customers WHERE id = ?', [id]);
    return rows[0] || null;
  },

  async getAll() {
    const [rows] = await pool.query('SELECT * FROM customers ORDER BY id DESC');
    return rows;
  },
};

module.exports = CustomerModel;
