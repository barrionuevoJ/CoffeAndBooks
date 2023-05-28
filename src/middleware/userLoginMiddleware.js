const { body } = require('express-validator');

const UserValidation = [
    body('email').notEmpty().withMessage('El email no puede estar vacio').bail()
    .isEmail().withMessage('Ingrese un correo válido').bail(),
    
    body('password').notEmpty().withMessage('La contraseña es obligatoria').bail()
    .isLength({ min: 8 }).withMessage('La contraseña debe tener un minimo de 8 caracteres'),
]

module.exports = UserValidation;