const { Admin } = require('../models');

const adminController = {
  async list(req, res) {
    try {
      const rows = await Admin.getAll();
      res.json({ success: true, admins: rows });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  async create(req, res) {
    try {
      const created = await Admin.create(req.body);
      res.status(201).json({ success: true, admin: created });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },
};

module.exports = adminController;
