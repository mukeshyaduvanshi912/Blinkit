const { pool } = require('../config/db');

const OrderModel = {
  async create({ customerId, totalAmount, status = 'pending' }) {
    const [result] = await pool.query(
      'INSERT INTO orders (customer_id, total_amount, status) VALUES (?, ?, ?)',
      [customerId, totalAmount, status]
    );
    return { id: result.insertId, customerId, totalAmount, status };
  },

  async findById(id) {
    const [rows] = await pool.query('SELECT * FROM orders WHERE id = ?', [id]);
    return rows[0] || null;
  },

  async findByCustomerId(customerId) {
    const [rows] = await pool.query('SELECT * FROM orders WHERE customer_id = ? ORDER BY id DESC', [customerId]);
    return rows;
  },

  async updateStatus(id, status) {
    await pool.query('UPDATE orders SET status = ? WHERE id = ?', [status, id]);
    return this.findById(id);
  },

  async getAll() {
    const [rows] = await pool.query('SELECT * FROM orders ORDER BY id DESC');
    return rows;
  },
};

module.exports = OrderModel;
