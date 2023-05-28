const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

const multerMiddleware = require('../middleware/multer');
const userRegisterValidation = require('../middleware/userRegisterValidation')
const guestMiddleware = require('../middleware/guestMiddleware')
const authMiddleware = require('../middleware/authMiddleware')

const uploadFile = multerMiddleware('users', 'user');

// Formulario de login
router.get('/login', guestMiddleware, userController.login);


router.get('/editprofile', userController.update);

// Procesar el login
router.post('/login', userController.loginProcess);

// Cerrar sesión
router.get('/logout', authMiddleware,userController.logout);

//Perfil de usuario
router.get('/profile', authMiddleware,userController.profile);

// Formulario de registro de usuario
router.get('/register', guestMiddleware, userController.register);

// Procesar el registro 
router.post('/register', uploadFile.single('profileImg'), userRegisterValidation, userController.newUser);

// Lista de usuarios

router.get('/usersList', authMiddleware,userController.userList)

// Editar un usuario

router.get('/update/:id', authMiddleware,userController.update)

// Borrar usuario

router.delete('/delete/:id', authMiddleware,userController.userDestroy)

module.exports = router;