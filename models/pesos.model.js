"use strict";
const mongoose = require("mongoose");

const schemaPesos = new mongoose.Schema({
    fecha: { type: Date, required: true, unique: true },
    peso: { type: Number, required: true },
    estatura: { type: Number, required: true },
});
module.exports = mongoose.model("Pesos", schemaPesos, "pesos");