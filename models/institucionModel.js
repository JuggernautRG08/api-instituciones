const mongoose = require('mongoose');
const InstitucionMongose = new mongoose.Schema({
    nombre: String,
    direccion: String,
    telefono: String,
    email: String,
    director: String,
    iddepartamento: Number,
    idmunicipio: Number,
    estado: String,
    idsecretaria: Number,
    nosedes: Number

});

const Institucion = mongoose.model('institucion', InstitucionMongose);

module.exports = Institucion;
