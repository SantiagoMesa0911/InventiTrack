const mongoose = require("mongoose")

const MarcasSchema = new mongoose.Schema({
    nombre:{type:String,require:true},
    estado:{type:Boolean,default:true}
},{timestamps:true})

const Marcas = mongoose.model("Marcas",MarcasSchema)

module.exports = Marcas