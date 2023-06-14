const express = require('express');
const router = express.Router();
const productsAPIController = require('../../controllers/api/productsAPIController');

//Listado de productos
router.get('/', productsAPIController.list);
//Detalle del producto
router.get('/:id', productsAPIController.detail);

module.exports = router;