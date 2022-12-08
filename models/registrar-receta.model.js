const mongoose = require("mongoose");
const schemaReceta = new mongoose.Schema({
    nombre: { type: String, required: true, unique: true },
    ingredientes: { type: String, required: true, unique: false },
    imagen: { type: String, required: false, unique: false },
    pasosReceta: { type: String, required: true, unique: false },
    tipoComida: { type: String, required: true, unique: false },
    categoriaComida: { type: String, required: true, unique: false }

});

// nombre que le daremos al modelo, nombre del esquema que vamos a exportar, nombre de la coleccion que se creara
module.exports = mongoose.model("Receta", schemaReceta, "recetas");