const express = require('express');
const router = express.Router(); // Devuelve un objeto JS que permite agregar rutas y reutilizarlas y exportarlas.
const productController = require('../controllers/productController');

router.get('/', productController.home);
router.get('/products', productController.listProducts);
router.post('/addProduct', productController.saveProduct);
router.get('/deleteProduct/:id', productController.deleteProduct);
router.get('/updateProduct/:id', productController.editProduct);
router.post('/updateProduct/:id', productController.updateProduct);

module.exports = router;  