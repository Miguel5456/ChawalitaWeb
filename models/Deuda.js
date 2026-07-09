const mongoose = require("mongoose");

const deudaSchema = new mongoose.Schema({

    titulo: {
        type: String,
        required: true
    },

    descripcion: {
        type: String,
        required: true
    },

    deudor: {
        type: String,
        required: true
    },

    acreedor: {
        type: String,
        required: true
    },

    estado: {
        type: String,
        enum: ["Pendiente", "Pagado", "En curso", "Infinito"],
        default: "Pendiente"
    },

    categoria: {
        type: String,
        default: "General"
    },

    fecha: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("Deuda", deudaSchema);