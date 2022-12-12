const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario.model');


//ruta para registrar usuario
router.post('/registro-usuario', (req, res) => {
    let usuario = new Usuario({
        nombre: req.body.nombre,
        nacimiento: req.body.nacimiento,
        estatura: req.body.estatura,
        genero: req.body.genero,
        correo: req.body.correo,
        foto: req.body.foto,
        pesoMeta: req.body.pesoMeta,
        actividad: req.body.actividad
    });
    usuario.save((error) => {
        if (error) {
            res.json({
                msj: 'Ocurrio un error al registrar el usuario',
                error
            })
        } else {
            res.json({
                msj: "Usuario registrado exitosamente, ahora proceda a registrar su peso"
            })
        }
    });
});
//ruta para obtener informacion del usuario
router.get('/obtener-usuario', (req, res) => {
    Usuario.find((error, lista) => {
        if (error) {
            res.json({
                msj: 'No se pudo listar el usuario',
                error
            });
        } else {
            res.json({
                msj: 'Usuario listado correctamente',
                lista
            });
        }
    })
});
//ruta para buscar usuario
router.get('/buscar-persona-identificacion', function(req, res) {

    let identificacion = req.query.identificacion

    Usuario.findOne({ identificacion: identificacion }, (err, personaBD) => {
        if (err) {
            return res.json({
                success: false,
                msj: 'No se encontró ninguna persona con esa identificación',
                err
            });
        } else {
            return res.json({
                success: true,
                persona: personaBD
            })
        }

    })


});
//ruta para actualizar usuario
router.put('/editar-usuario', function(req, res) {
    let body = req.body;
    Usuario.updateOne({ _id: body._id }, {
            $set: req.body
        },
        function(error) {
            if (error) {
                res.json({
                    msj: 'Ocurrio un error al editar el usuario',
                    error
                })
            } else {
                res.json({
                    msj: "Usuario registrado editado exitosamente."
                })
            }
        })
}); //ruta para eliminar la informacion del usuario
router.delete('/eliminar-usuario', (req, res) => {});

module.exports = router;