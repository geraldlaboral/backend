"use strict"

const mongoose = require("mongoose");
const schemaReceta = new mongoose.Schema({
    nombre: { type: String, required: true, unique: true },
    ingredientes: { type: String, required: true, unique: false },
    imagen: { type: String, required: false, unique: false },
    pasosReceta: { type: String, required: true, unique: false },
    tipoComida: { type: String, required: true, unique: false },
    categoriaComida: { type: String, required: true, unique: false }

});

module.exports = mongoose.model("Receta", schemaReceta, "recetas");