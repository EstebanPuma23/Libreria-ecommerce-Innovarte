const {check} = require('express-validator');

module.exports = [
    check('name')
    .notEmpty().withMessage('El nombre del producto es obligatorio'),

    check('description')
    .notEmpty().withMessage('La descripción es obligatoria').bail()
    .isLength({
        min : 15
    }).withMessage('La descripción debe tener un mímino de 15 caracteres'),

    check('feactures')
    .notEmpty().withMessage('Las característcias son obligatorias').bail()
    .isLength({
        min : 15
    }).withMessage('Las características deben tener un mímino de 15 caracteres'),

    check('price')
    .isDecimal({
        min: 1
    }).withMessage('Debe contener un número válido'),

    check('category')
    .notEmpty().withMessage('Indicá la categoría'),
]