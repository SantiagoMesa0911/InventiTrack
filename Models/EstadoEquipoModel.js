const mongoose = require("mongoose")

const EstadoEquipoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        enum: ["en_uso", "bodega", "deprecado", "reparacion"],
        default: "en_uso",
        required: true
    },
    estado: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
})

const EstadoEquipo = mongoose.model("EstadoEquipo", EstadoEquipoSchema)

module.exports = EstadoEquipo