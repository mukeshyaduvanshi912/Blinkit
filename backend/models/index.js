// Export all pool-based models for controllers to consume
const User = require('./userModel');
const Product = require('./productModel');
const Admin = require('./adminModel');
const Customer = require('./customerModel');
const Order = require('./orderModel');
const Payment = require('./paymentModel');
const Cart = require('./cartModel');

module.exports = {
  User,
  Product,
  Admin,
  Customer,
  Order,
  Payment,
  Cart,
};
