const mongoose = require('mongoose');
let schemaActividad = new mongoose.Schema({
    'horaInicio': { type: Number, required: true, unique: false },
    'horaFinal': { type: Number, required: true, unique: false },
    'fecha': { type: Number, required: true, unique: false },
    'nombre': { type: String, required: true, unique: false },
    'tipo': { type: String, required: true, unique: false },
    'peso': { type: Number, required: true, unique: false },
    'imc': { type: Number, required: true, unique: false }
});
module.exports = mongoose.model('Actividad', schemaActividad, 'actividades');