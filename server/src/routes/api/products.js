const express = require('express');
const router = express.Router();
const productsAPIController = require('../../controllers/productsAPIController');

//Listado de productos
router.get('/', productsAPIController.list);
//Detalle del producto
router.get('/:id', productsAPIController.detail);

module.exports = router;