const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.get('/', customerController.list);
router.get('/:id', customerController.get);
router.post('/', customerController.create);

module.exports = router;
