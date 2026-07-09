const express = require("express");
const router = express.Router();

const Deuda = require("../models/Deuda");


// 🔵 GET — todas las deudas
router.get("/", async (req, res) => {
    const deudas = await Deuda.find();
    res.json(deudas);
});


// 🟢 POST — crear deuda
router.post("/", async (req, res) => {
    const nueva = new Deuda(req.body);
    await nueva.save();
    res.json(nueva);
});


// 🟡 PUT — editar deuda completa
router.put("/:id", async (req, res) => {
    const actualizada = await Deuda.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.json(actualizada);
});


// 🔴 DELETE — eliminar deuda
router.delete("/:id", async (req, res) => {
    await Deuda.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Deuda eliminada" });
});


// 🟣 PATCH — cambiar solo estado
router.patch("/:id", async (req, res) => {
    const actualizada = await Deuda.findByIdAndUpdate(
        req.params.id,
        { estado: req.body.estado },
        { new: true }
    );

    res.json(actualizada);
});

module.exports = router;