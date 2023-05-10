const express = require('express')
const router = express.Router();
const mainController = require ('../controllers/mainController')

router.get('/', mainController.index);

router.get('/productList', mainController.productList);

router.get('/productCart', mainController.productCart);

router.get('/productDetail/:libroId/', mainController.productDetail);

module.exports = router;