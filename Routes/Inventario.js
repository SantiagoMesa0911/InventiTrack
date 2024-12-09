const express = require('express');
const InventarioServices = require('../services/InventarioServices')
const authorize = require('../Middlewares/authorize')
const authenticate = require('../Middlewares/authenticate')

function Inventario(app) {
    const router = express.Router()
    const inventarioServicio = new InventarioServices()

    app.use('/api/inventario', router)

    router.get('/', authenticate, authorize(['administrador','docente']), async (req, res) => {
        const inventarios = await inventarioServicio.ObtenerInventario()
        if (inventarios.error) {
            return res.status(500).json({ error: inventarios.error })
        }
        return res.status(200).json(inventarios)
    })


    router.post('/crear', authenticate, authorize(['administrador']), async (req, res) => {
        const nuevoInventario = await inventarioServicio.CrearInventario(req.body)
        if (nuevoInventario.error) {
            return res.status(400).json({ error: nuevoInventario.error })
        }
        return res.status(201).json(nuevoInventario)
    })


    router.put('/actualizar/:id', authenticate, authorize(['administrador']), async (req, res) => {
        const ActualizarInventario = await inventarioServicio.ActualizarInventario(req.params.id, req.body)
        if (ActualizarInventario.error) {
            return res.status(400).json({ error: ActualizarInventario.error })
        }
        return res.status(200).json(ActualizarInventario)
    })
}

module.exports = Inventario