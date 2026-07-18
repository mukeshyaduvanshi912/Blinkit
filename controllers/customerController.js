const { Customer } = require('../models');

const customerController = {
  async list(req, res) {
    try {
      const rows = await Customer.getAll();
      res.json({ success: true, customers: rows });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  async get(req, res) {
    try {
      const id = req.params.id;
      const customer = await Customer.findById(id);
      if (!customer) return res.status(404).json({ success: false, message: 'Customer not found' });
      res.json({ success: true, customer });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  async create(req, res) {
    try {
      const created = await Customer.create(req.body);
      res.status(201).json({ success: true, customer: created });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },
};

module.exports = customerController;
