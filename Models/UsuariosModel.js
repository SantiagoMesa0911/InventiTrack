const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const UsuariosSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    estado: {
        type: Boolean,
        default: true
    },
    password: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        enun: ["administrador", "docente"],
        default: "docente",
        required: true
    }
}, {
    timestamps: true
})

// Middleware para encriptar la contraseña antes de guardar
UsuariosSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

UsuariosSchema.pre("findOneAndUpdate", async function (next) {
    const update = this.getUpdate();
    if (update.password || update.email) {
        delete update.password
        delete update.email
    }

    next();
})

// Método para comparar contraseñas
UsuariosSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};


const Usuarios = mongoose.model("Usuario", UsuariosSchema)

module.exports = Usuarios