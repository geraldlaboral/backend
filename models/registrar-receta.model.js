"use strict"

const mongoose = require("mongoose");
const schemaRecetas = new mongoose.Schema({
    nombre: { type: String, required: true, unique: true },
    ingredientes: { type: String, required: true, unique: false },
    imagen: { type: String, required: false, unique: false },
    pasos_de_la_receta: { type: String, required: true, unique: false },
    tipo_de_comida: { type: String, required: true, unique: false },
    categoria_de_comida: { type: String, required: true, unique: false }

});

module.exports = mongoose.model("Receta", schemaRecetas, "recetas");