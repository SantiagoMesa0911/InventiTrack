const express = require('express');
const UsuarioServices = require('../services/UsuarioServices')
const authorize = require('../Middlewares/authorize')
const authenticate = require('../Middlewares/authenticate')

function Usuarios(app) {
    const router = express.Router();
    const UsuarioServicio = new UsuarioServices()

    app.use('/api/inventario/usuario', router)


    router.get('/', authenticate, authorize(['administrador']), async (req, res) => {
        const usuarios = await UsuarioServicio.ObtenerUsuarios()
        if (usuarios.error) {
            return res.status(400).json({ error: usuarios.error })
        }
        return res.status(200).json(usuarios)
    })

    router.post('/crear',  authenticate, authorize(['administrador']), async (req, res) => {
        const nuevo_usuario = await UsuarioServicio.CrearUsuarios(req.body)
        if (nuevo_usuario.error) {
            return res.status(400).json({ error: nuevo_usuario.error });
        }

        return res.status(201).json(nuevo_usuario);
    })

    router.put('/actualizar/:id', authenticate, authorize(['administrador']), async (req, res) => {
        const usuario_actualizado = await UsuarioServicio.ActualizarUsuario(req.params.id, req.body)
        if (usuario_actualizado.error) {
            return res.status(400).json({ error: usuario_actualizado.error });
        }
        return res.status(200).json(usuario_actualizado);
    })
}

module.exports = Usuarios;