const express = require('express');
const router = express.Router();
const {
  getProducts,
  addProduct,
  deleteProduct
} = require('../controller/productcontroller');

router.get('/', getProducts);
router.post('/', addProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
