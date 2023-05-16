const { body } = require('express-validator');

const UserValidation = [
    body('email').isEmail().withMessage('Ingrese un correo válido').bail()
    .notEmpty().withMessage('Por favor, complete este campo').bail()
]

module.exports = UserValidation;