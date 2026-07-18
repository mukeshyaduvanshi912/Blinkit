const { pool } = require('../config/db');

const PaymentModel = {
  async create({ orderId, amount, method, status = 'pending' }) {
    const [result] = await pool.query(
      'INSERT INTO payments (order_id, amount, method, status) VALUES (?, ?, ?, ?)',
      [orderId, amount, method, status]
    );
    return { id: result.insertId, orderId, amount, method, status };
  },

  async findByOrderId(orderId) {
    const [rows] = await pool.query('SELECT * FROM payments WHERE order_id = ?', [orderId]);
    return rows;
  },

  async findById(id) {
    const [rows] = await pool.query('SELECT * FROM payments WHERE id = ?', [id]);
    return rows[0] || null;
  },
};

module.exports = PaymentModel;
