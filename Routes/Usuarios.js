const express = require('express');
const UsuarioServices = require('../services/UsuarioServices')


function Usuarios(app) {
    const router = express.Router();
    const UsuarioServicio = new UsuarioServices()

    app.use('/api/inventario', router)


    router.get('/', async (req, res) => {
        const usuarios = await UsuarioServicio.ObtenerUsuarios()
        if (usuarios.error) {
            return res.status(400).json({ error: usuarios.error })
        }
        return res.status(200).json(usuarios)
    })

    router.post('/crear', async (req, res) => {
        const nuevo_usuario = await UsuarioServicio.CrearUsuarios(req.body)
        if (nuevo_usuario.error) {
            return res.status(400).json({ error: nuevo_usuario.error });
        }

        return res.status(201).json(nuevo_usuario);
    })
}

module.exports = Usuarios;