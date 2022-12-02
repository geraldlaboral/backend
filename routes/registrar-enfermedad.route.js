const express = require("express");

const router = express.Router();

const Enfermedad = require("../models/registrar-enfermedad.model")

// Ruta para registrar una receta
router.post("/registrar-enfermedad", (req, res) => {
    let enfermedad = new Enfermedad({
        nombre: req.body.nombreEnfermedad,
        descripcion: req.body.descripcionEnfermedad,
        estado: req.body.estadoEnfermedad,
        medicamento: req.body.medicamentos
    });

    enfermedad.save((error) => {
        if (error) {
            res.json({
                msj: "Ocurrió un error al registrar la enfermedad",
                error
            })
        } else {
            res.json({
                msj: "La enfermedad se registró correctamente"
            });
        }
    })
});



// Ruta para obtener recetas registradas
router.get("obtener-enfermedad", (req, res) => {});

// Ruta para modificar recetas
router.put("actualizar-enfermedad", (req, res) => {});

// Ruta para eliminar una receta
router.delete("eliminar-enfermedad", (req, res) => {});

module.exports = router;