const { Order } = require('../models');

const orderController = {
  async list(req, res) {
    try {
      const rows = await Order.getAll();
      res.json({ success: true, orders: rows });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  async get(req, res) {
    try {
      const id = req.params.id;
      const order = await Order.findById(id);
      if (!order) return res.status(404).json({ success: false, message: 'Order not found' });
      res.json({ success: true, order });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  async create(req, res) {
    try {
      const created = await Order.create(req.body);
      res.status(201).json({ success: true, order: created });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  async updateStatus(req, res) {
    try {
      const id = req.params.id;
      const { status } = req.body;
      const updated = await Order.updateStatus(id, status);
      res.json({ success: true, order: updated });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },
};

module.exports = orderController;
