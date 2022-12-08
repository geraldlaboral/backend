const express = require('express');
const Actividad = require('../models/actividades.model');
const router = express.Router();

router.post('/registrar-actividad', (req, res) => {
    let actividadNueva = new Actividad({
        'horaInicio': req.body.horaInicio,
        'horaFinal': req.body.horaFinal,
        'fecha': req.body.fecha,
        'nombre': req.body.nombre,
        'tipo': req.body.tipo,
        'peso': req.body.peso,
        'imc': req.body.imc
    });

    actividadNueva.save(error => {
        if (error) {
            res.json({
                error
            });

        } else {
            res.json({
                msg: 'Los datos fueron registrados correctamente.'
            });
        }
    });

});

module.exports = router;