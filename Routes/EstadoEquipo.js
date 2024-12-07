const expres = require('express')
const EstadoEquipoServices = require('../services/EstadoEquipoServices')
const authorize = require('../Middlewares/authorize')
const authenticate = require('../Middlewares/authenticate')


function EstadoEquipo(app) {
    const router = expres.Router()
    const EstadoEquipoServicio = new EstadoEquipoServices()

    app.use('/api/inventario/estadoequipo', router)

    router.get('/', authenticate, authorize(['administrador','docente']), async (req, res) => {
        const estadoequipos = await EstadoEquipoServicio.ObtenerEstadoEquipo()
        if (estadoequipos.error) {
            return res.status(500).json({ error: estadoequipos.error });
        }
        return res.status(200).json(estadoequipos)

    })

    router.post('/crear', async (req, res) => {
        const nuevoEstadoEquipo = await EstadoEquipoServicio.CrearEstadoEquipo(req.body)
        if (nuevoEstadoEquipo.error) {
            return res.status(400).json({ error: nuevoEstadoEquipo.error });
        }

        return res.status(201).json(nuevoEstadoEquipo);
    })

}

module.exports = EstadoEquipo