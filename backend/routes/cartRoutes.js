const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.get('/', cartController.list);
router.post('/', cartController.add);
router.put('/:id', cartController.update);
router.delete('/:id', cartController.remove);
router.delete('/', cartController.clear);

module.exports = router;
