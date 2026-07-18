const { pool } = require('../config/db');

const UserModel = {
  async create({ name, email, password }) {
    const [result] = await pool.query(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name, email, password]
    );
    return { id: result.insertId, name, email };
  },

  async findByEmail(email) {
    const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    return rows[0] || null;
  },

  async findById(id) {
    const [rows] = await pool.query('SELECT id, name, email FROM users WHERE id = ?', [id]);
    return rows[0] || null;
  },

  async getAll() {
    const [rows] = await pool.query('SELECT id, name, email FROM users');
    return rows;
  },
};

module.exports = UserModel;
