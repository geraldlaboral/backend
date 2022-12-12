const express = require("express");

const router = express.Router();

const Ayuno = require("../models/ayunos.model")

// Ruta para registrar un ayuno
router.post("/registrar-ayuno", (req, res) => {
    let ayuno = new Ayuno({
        plan: req.body.plan,
        inicio: req.body.inicio,
        finalizacion: req.body.finalizacion,

    });

    ayuno.save((error) => {
        if (error) {
            res.json({
                msj: "Ocurrió un error al registrar el plan de ayuno",
                error
            })
        } else {
            res.json({
                msj: "El plan de ayuno se registró correctamente"
            });
        }
    });
});



// Ruta para obtener planes de ayuno
router.get("/obtener-ayunos", (req, res) => {
    Ayuno.find((error, lista) => {
        if (error) {
            res.json({
                msj: "No se pudieron listar los planes de ayuno",
                error
            });

        } else {
            res.json({
                msj: "Planes de ayuno listados correctamente.",
                lista
            });

        }
    });

});

// Ruta para modificar recetas
router.put("/actualizar-receta", (req, res) => {});

// Ruta para eliminar una receta
router.delete("/eliminar-receta", (req, res) => {});

module.exports = router;