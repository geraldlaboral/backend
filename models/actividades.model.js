const mongoose = require("mongoose");
const schemaActividad = new mongoose.Schema({
    horaInicio: { type: String, required: true, unique: false },
    horaFinal: { type: String, required: true, unique: false },
    fecha: { type: String, required: false, unique: false },
    nombre: { type: String, required: true, unique: true },
    tipo: { type: String, required: true, unique: false },
    peso: { type: String, required: false, unique: false },
    imc: { type: String, required: false, unique: false }
});
module.exports = mongoose.model('Actividad', schemaActividad, 'actividades');