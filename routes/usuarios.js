// Rutas para crear usuarios
const usuarioController = require('../controllers/usuarioController');
const express = require ('express');
const router = express.Router();
const { check } = require('express-validator');

// Crea un usuario
// api/usuarios
router.post('/',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'Agrega un email valido').isEmail(),
        check('password','El password debe ser mini de 6 caracteres').isLength({min:6})
    ],
    usuarioController.crearUsuario
);

module.exports = router;