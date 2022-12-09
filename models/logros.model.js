const mongoose = require("mongoose");

const schemaLogros = new mongoose.Schema({
    objetivo: { type: String, required: true },
    nombreLogro: { type: String, required: true },
    horaMeta: { type: Number, required: true },
    pesoMeta: { type: Number, required: true },
    imcDeseado: { type: Number, required: true },
    dificultad: { type: String, required: true },
});
module.exports = mongoose.model("Logro", schemaLogros, "logro");