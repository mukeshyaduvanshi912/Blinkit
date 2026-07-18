const { pool } = require('../config/db');

const CartModel = {
  async create({ customerId, productId, quantity = 1 }) {
    const [result] = await pool.query(
      `INSERT INTO cart_items (customer_id, product_id, quantity)
       VALUES (?, ?, ?)
       ON DUPLICATE KEY UPDATE quantity = quantity + VALUES(quantity)`,
      [customerId, productId, quantity]
    );

    const itemId = result.insertId || null;
    return this.findByCustomerProduct(customerId, productId);
  },

  async findById(id) {
    const [rows] = await pool.query('SELECT * FROM cart_items WHERE id = ?', [id]);
    return rows[0] || null;
  },

  async findByCustomerProduct(customerId, productId) {
    const [rows] = await pool.query(
      'SELECT * FROM cart_items WHERE customer_id = ? AND product_id = ?',
      [customerId, productId]
    );
    return rows[0] || null;
  },

  async findAllByCustomerId(customerId) {
    const [rows] = await pool.query(
      `SELECT ci.id,
              ci.customer_id AS customerId,
              ci.product_id AS productId,
              ci.quantity,
              p.name,
              p.description,
              p.price,
              p.image AS imageUrl,
              p.category
       FROM cart_items ci
       JOIN products p ON p.id = ci.product_id
       WHERE ci.customer_id = ?
       ORDER BY ci.id DESC`,
      [customerId]
    );
    return rows;
  },

  async updateQuantity(id, quantity) {
    await pool.query('UPDATE cart_items SET quantity = ? WHERE id = ?', [quantity, id]);
    return this.findById(id);
  },

  async remove(id) {
    await pool.query('DELETE FROM cart_items WHERE id = ?', [id]);
    return true;
  },

  async clearByCustomerId(customerId) {
    await pool.query('DELETE FROM cart_items WHERE customer_id = ?', [customerId]);
    return true;
  },
};

module.exports = CartModel;
