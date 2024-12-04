const mongoose = require("mongoose")

const TipoEquipoSchema = new mongoose.Schema({
    nombre:{type:String,require:true},
    estado:{type:Boolean,default:true}
},{timestamps:true})

const TipoEquipo = mongoose.model("TipoEquipo",TipoEquipoSchema)

module.exports = TipoEquipo