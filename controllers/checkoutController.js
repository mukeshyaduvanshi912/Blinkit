const { pool } = require('../config/db');
const { Cart, Order, Payment } = require('../models');

const checkoutController = {
  async create(req, res) {
    try {
      const { customerId, paymentMethod = 'card' } = req.body;
      if (!customerId) {
        return res.status(400).json({ success: false, message: 'customerId is required' });
      }

      const connection = await pool.getConnection();
      try {
        await connection.beginTransaction();

        const [cartItems] = await connection.query(
          `SELECT ci.quantity, p.price, p.id AS productId, p.name
           FROM cart_items ci
           JOIN products p ON p.id = ci.product_id
           WHERE ci.customer_id = ?`,
          [customerId]
        );

        if (!cartItems.length) {
          await connection.rollback();
          return res.status(400).json({ success: false, message: 'Cart is empty' });
        }

        const totalAmount = cartItems.reduce(
          (sum, item) => sum + Number(item.price) * Number(item.quantity),
          0
        );

        const [orderResult] = await connection.query(
          'INSERT INTO orders (customer_id, total_amount, status) VALUES (?, ?, ?)',
          [customerId, totalAmount, 'completed']
        );

        const order = {
          id: orderResult.insertId,
          customerId,
          totalAmount,
          status: 'completed',
        };

        const [paymentResult] = await connection.query(
          'INSERT INTO payments (order_id, amount, method, status) VALUES (?, ?, ?, ?)',
          [order.id, totalAmount, paymentMethod, 'paid']
        );

        await connection.query('DELETE FROM cart_items WHERE customer_id = ?', [customerId]);

        await connection.commit();

        return res.status(201).json({
          success: true,
          order,
          payment: {
            id: paymentResult.insertId,
            orderId: order.id,
            amount: totalAmount,
            method: paymentMethod,
            status: 'paid',
          },
          items: cartItems,
        });
      } catch (err) {
        await connection.rollback();
        throw err;
      } finally {
        connection.release();
      }
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },
};

module.exports = checkoutController;
