const mongoose = require("mongoose")

const MarcasSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    estado: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
})

const Marcas = mongoose.model("Marca", MarcasSchema)

module.exports = Marcas