const { Router }  = require('express');
const controlador = require('../controllers/usuarioController');
const route = Router();

route.post("/",controlador.createUsuario)
module.exports = route