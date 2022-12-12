const express = require("express");

const router = express.Router();

const Actividad = require("../models/actividades.model");


router.post("/registrar-actividad", (req, res) => {
    let actividad = new Actividad({
        horaInicio: req.body.horaInicio,
        horaFinal: req.body.horaFinal,
        fecha: req.body.fecha,
        nombre: req.body.nombre,
        tipo: req.body.tipo,
        peso: req.body.peso,
        imc: req.body.imc
    });

    actividad.save((error) => {
        if (error) {
            res.json({
                msj: "Ocurrió un error al registrar la actividad!!",
                error
            });
        } else {
            res.json({
                msg: 'Los datos fueron registrados correctamente!.'
            });
        }
    });
});

router.get("/listar-actividades", (req, res) => {
    Actividad.find((error, lista) => {
        if (error) {
            res.json({
                msj: "No se pudo listar la actividad.",
                error
            });

        } else {
            res.json({
                msj: "actividad listada correctamente.",
                lista
            });

        }
    });

});

// Ruta para modificar actividad
router.put("/actualizar-actividad", (req, res) => {});

// Ruta para eliminar una actividad
router.delete("/eliminar-actividad", (req, res) => {});


module.exports = router;