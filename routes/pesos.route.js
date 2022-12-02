const express = require("express");
const router = express.Router();
const Peso = require("../models/pesos.model");

//ruta para registrar peso
router.post("/registrar-peso", (req, res) => {
    let nuevoPeso = new Peso({
        fecha: req.body.fecha,
        peso: req.body.peso,
        estatura: req.body.estatura,
    });

    nuevoPeso.save((error) => {
        if (error) {
            res.json({
                mensaje: "Ocurrio un error al registrar el peso",
                error,
            });
        } else {
            res.json({
                mensaje: "El peso se registro exitosamente",
            });
        }
    });
});

//ruta para obtener informacion
router.get("/obtener-pesos", (req, res) => {
    Peso.find((error, lista) => {
        if (error) {
            res.json({
                mensaje: "No se pudo consultar la lista de pesos",
                error,
            });
        } else {
            res.json({
                mensaje: "Pesos listados correctamente",
                lista,
            });
        }
    });
});

//ruta para modificar la informacion
router.put("actualizar-peso", (req, res) => {});

//ruta para eliminar la informacion
router.delete("/eliminar-peso", (req, res) => {});

module.exports = router;