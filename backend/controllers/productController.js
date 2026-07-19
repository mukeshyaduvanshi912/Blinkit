const { Product } = require('../models');

const productController = {
  async list(req, res) {
    try {
      const products = await Product.findAll();
      res.json({ success: true, products });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  async get(req, res) {
    try {
      const id = req.params.id;
      const product = await Product.findById(id);
      if (!product) return res.status(404).json({ success: false, message: 'Product not found' });
      res.json({ success: true, product });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  async create(req, res) {
    try {
      const data = req.body;
      const created = await Product.create(data);
      res.status(201).json({ success: true, product: created });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  async update(req, res) {
    try {
      const id = req.params.id;
      const updated = await Product.update(id, req.body);
      res.json({ success: true, product: updated });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  async remove(req, res) {
    try {
      const id = req.params.id;
      await Product.remove(id);
      res.json({ success: true });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },
};

module.exports = productController;
