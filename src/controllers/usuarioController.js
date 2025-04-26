const { Model } = require("sequelize");
const Usuario = require("../db/models/usuario.js");
const createUsuario = async(req, res) =>{
    const usuario = await Usuario.create(req.body);
    res.status(201).json(usuario);

};

module.exports = {createUsuario}; //Exporta todas las funciones del controller para ser usadas en las Rutas
