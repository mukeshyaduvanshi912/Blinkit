const { Payment } = require('../models');

const paymentController = {
  async create(req, res) {
    try {
      const created = await Payment.create(req.body);
      res.status(201).json({ success: true, payment: created });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  async getByOrder(req, res) {
    try {
      const orderId = req.params.orderId;
      const rows = await Payment.findByOrderId(orderId);
      res.json({ success: true, payments: rows });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  async get(req, res) {
    try {
      const id = req.params.id;
      const payment = await Payment.findById(id);
      if (!payment) return res.status(404).json({ success: false, message: 'Payment not found' });
      res.json({ success: true, payment });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },
};

module.exports = paymentController;
