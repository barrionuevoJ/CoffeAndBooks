// Recuerden que si utilizan uploadFile.single lo vamos a 
// consumir como req.file.. y si usamos array lo consumimos como req.files

const express = require('express');
const router = express.Router();

const productValidation = require('../middleware/productCreateValidation')
const productsController = require('../controllers/productsController')
const authMiddleware = require('../middleware/authMiddleware')
const multerMiddleware = require('../middleware/multer');
const uploadFile = multerMiddleware('products', 'product');

// Obtener todos los productos 
router.get('/', productsController.all);

// Carrito
router.get('/cart', authMiddleware, productsController.cart)

// Añadir al carro
router.post('/addCart/:id', authMiddleware, productsController.addCart);

// Crear un producto 
router.post('/create', authMiddleware,uploadFile.single('img'), productValidation, productsController.create)

router.get('/create', authMiddleware, productsController.add);

// Obtener un producto
router.get('/detail/:id', productsController.detail);

// Editar un producto
router.get('/edit/:id', authMiddleware,productsController.edit);
router.put('/edit/:id', authMiddleware,uploadFile.single('img'), productValidation, productsController.update);

// Borrar un producto 
router.delete('/delete/:id', productsController.destroy);


module.exports = router;