const mongoose = require("mongoose");
const schemaAyuno = new mongoose.Schema({
    plan: { type: String, required: true, unique: false },
    inicio: { type: Date, required: true, unique: false },
    finalizacion: { type: Date, required: true, unique: false },
});

// nombre que le daremos al modelo, nombre del esquema que vamos a exportar, nombre de la coleccion que se creara
module.exports = mongoose.model("Ayuno", schemaAyuno, "ayuno");