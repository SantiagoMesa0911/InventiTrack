// src/models/Inventario.js
const mongoose = require('mongoose');

const InventarioSchema = new mongoose.Schema({
    serial: {
        type: String,
        unique: true,
        required: true
    },
    modelo: {
        type: String,
        unique: true,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    foto: {
        type: String,
        required: true
    }, // URL de la imagen
    color: {
        type: String,
        required: true
    },
    fechaCompra: {
        type: Date,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }, // Solo usuarios activos
    marca: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Marca',
        required: true
    }, // Solo marcas activas
    estadoEquipo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EstadoEquipo',
        required: true
    }, // Estados
    tipoEquipo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TipoEquipo',
        required: true
    }, // Tipos de equipo

}, {
    timestamps: true
})

const Inventario = mongoose.model("Inventario", InventarioSchema)


module.exports = Inventario
