"use strict"

const mongoose = require("mongoose");
const schemaEnfermedad = new mongoose.Schema({
    nombre: { type: String, required: true, unique: true },
    descripcion: { type: String, required: true, unique: false },
    estado: { type: String, required: true, unique: false },
    medicamento: { type: String, required: false, unique: false },

});

module.exports = mongoose.model("Enfermedad", schemaEnfermedad, "enfermedades");