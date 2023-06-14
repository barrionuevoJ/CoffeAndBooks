const express = require('express');
const router = express.Router();
const usersAPIController = require('../../controllers/api/usersAPIController');

//Listado de users
router.get('/', usersAPIController.list);
//Detalle del usuarios
router.get('/:id', usersAPIController.detail);

module.exports = router;