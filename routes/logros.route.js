const express = require("express");
const router = express.Router();
const Logro = require("../models/logros.model");

router.post("/registro-logro", (req, res) => {
    let logro = new Logro({
        objetivo: req.body.objetivo,
        nombreLogro: req.body.nombreLogro,
        horaMeta: req.body.horaMeta,
        pesoMeta: req.body.pesoMeta,
        imcDeseado: req.body.imcDeseado,
        dificultad: req.body.dificultad,
    });
    logro.save((error) => {
        if (error) {
            res.json({
                msj: "Ocurrio un error al registrar el logro",
                error,
            });
        } else {
            res.json({
                msj: "El logro se registro correctamente",
            });
        }
    });
});

router.get("/obtener-logro", (req, res) => {
    Logro.find((error, lista) => {
        if (error) {
            res.json({
                msj: "No se pudo listar el logro",
                error,
            });
        } else {
            res.json({
                msj: "El logro se listo correctamente",
                lista,
            });
        }
    });
});

module.exports = router;