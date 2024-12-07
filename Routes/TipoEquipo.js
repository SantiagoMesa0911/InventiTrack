const expres = require('express')
const TipoEquipoServices = require('../services/TipoEquipoServices')
const authorize = require('../Middlewares/authorize')
const authenticate = require('../Middlewares/authenticate')


function TipoEquipo(app) {
    const router = expres.Router()
    const TipoEquipoServicio = new TipoEquipoServices()

    app.use('/api/inventario/tipoequipo', router)

    router.get('/', authenticate, authorize(['administrador','docente']), async (req, res) => {
        const tipoequipos = await TipoEquipoServicio.ObtenerTipoEquipo()
        if (tipoequipos.error) {
            return res.status(500).json({ error: tipoequipos.error });
        }
        return res.status(200).json(tipoequipos)

    })

    router.post('/crear', async (req, res) => {
        const nuevoTipoEquipo = await TipoEquipoServicio.CrearTipoEquipo(req.body)
        if (nuevoTipoEquipo.error) {
            return res.status(400).json({ error: nuevoTipoEquipo.error });
        }

        return res.status(201).json(nuevoTipoEquipo);
    })

}

module.exports = TipoEquipo