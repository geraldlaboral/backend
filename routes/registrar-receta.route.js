const express = require("express");

const router = express.Router();

const Receta = require("../models/registrar-receta.model")

// Ruta para registrar una receta
router.post("/registrar-recetas", (req, res) => {
    let receta = new Receta({
        nombre: req.body.nombreReceta,
        ingredientes: req.body.ingredientes,
        imagen: req.body.imagen,
        pasosReceta: req.body.pasosReceta,
        tipoComida: req.body.tipoComida,
        categoriaComida: req.body.categoriaComida
    });

    receta.save((error) => {
        if (error) {
            res.json({
                msj: "Ocurrió un error al registrar la receta",
                error
            })
        } else {
            res.json({
                msj: "La receta se registró correctamente"
            });
        }
    });
});



// Ruta para obtener recetas registradas
router.get("/obtener-recetas", (req, res) => {
    receta.find((error, lista) => {
        if (error) {
            res.json({
                msj: "No se pudo listar la receta.",
                error
            });

        } else {
            res.json({
                msj: "Receta listada correctamente.",
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