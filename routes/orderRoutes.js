const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.get('/', orderController.list);
router.get('/:id', orderController.get);
router.post('/', orderController.create);
router.put('/:id/status', orderController.updateStatus);

module.exports = router;
