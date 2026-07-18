const { Cart } = require('../models');

const cartController = {
  async list(req, res) {
    try {
      const customerId = req.query.customerId;
      if (!customerId) return res.status(400).json({ success: false, message: 'customerId is required' });

      const cartItems = await Cart.findAllByCustomerId(customerId);
      res.json({ success: true, items: cartItems });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  async add(req, res) {
    try {
      console.log('Add to cart payload:', req.body);
      const { customerId, productId, quantity = 1 } = req.body;
      if (!customerId || !productId) {
        return res.status(400).json({ success: false, message: 'customerId and productId are required' });
      }

      const item = await Cart.create({ customerId, productId, quantity });
      res.status(201).json({ success: true, item });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  async update(req, res) {
    try {
      const id = req.params.id;
      const { quantity } = req.body;
      if (quantity == null) {
        return res.status(400).json({ success: false, message: 'quantity is required' });
      }

      const item = await Cart.updateQuantity(id, quantity);
      res.json({ success: true, item });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  async remove(req, res) {
    try {
      const id = req.params.id;
      await Cart.remove(id);
      res.json({ success: true });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  async clear(req, res) {
    try {
      const customerId = req.query.customerId;
      if (!customerId) return res.status(400).json({ success: false, message: 'customerId is required' });

      await Cart.clearByCustomerId(customerId);
      res.json({ success: true });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },
};

module.exports = cartController;
