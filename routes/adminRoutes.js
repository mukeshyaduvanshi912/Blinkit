const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/', adminController.list);
router.post('/', adminController.create);

module.exports = router;
