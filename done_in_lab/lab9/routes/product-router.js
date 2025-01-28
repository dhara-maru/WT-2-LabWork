const express = require('express');
const router = express.Router();
const { addProduct, getAllProducts, getProductById, deleteProduct } = require('../controllers/product-controller');

router.post('/create', addProduct);
router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.delete('/delete/:id', deleteProduct);

module.exports = router;
