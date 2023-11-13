const express = require('express');
const router = express.Router(); // Devuelve un objeto JS que permite agregar rutas y reutilizarlas y exportarlas.
const userController = require('../controllers/userController');

router.get('/', userController.home);
router.get('/users', userController.list);
router.post('/add', userController.save);
router.get('/delete/:id', userController.delete);
router.get('/update/:id', userController.edit);
router.post('/update/:id', userController.update);

module.exports = router;  