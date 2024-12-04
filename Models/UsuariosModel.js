const mongoose = require ("mongoose")
const bcrypt = require("bcrypt")

const UsuariosSchema = new mongoose.Schema({
    nombre:{type:String,require:true},
    email:{type:String,unique:true,require:true},
    estado:{type:Boolean,default:true},
    password:{type:String,require:true},
    rol:{type:String,enun:["administrador","docente"],require:true}
},{timestamps:true})

UsuariosSchema.pre("save", async (next) => {
    if(!this.isModified("password")) return next()
        const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
    next()
})

const Usuarios = mongoose.model("Usuarios",UsuariosSchema)

module.exports = Usuarios