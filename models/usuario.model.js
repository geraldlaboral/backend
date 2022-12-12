const mongoose = require('mongoose');

const schemaUsuario = new mongoose.Schema({
    nombre: { type: String, required: true },
    nacimiento: { type: Date, required: true },
    estatura: { type: Number, required: true },
    genero: { type: String, required: true },
    correo: { type: String, required: true, unique: true },
    foto: { type: String, required: false },
    pesoMeta: { type: Number, required: true },
    actividad: { type: String, require: true }
});
module.exports = mongoose.model('Usuario', schemaUsuario, 'usuario');