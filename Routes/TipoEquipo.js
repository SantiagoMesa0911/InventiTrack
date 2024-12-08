const expres = require('express')
const TipoEquipoServices = require('../services/TipoEquipoServices')
const authorize = require('../Middlewares/authorize')
const authenticate = require('../Middlewares/authenticate')


function TipoEquipo(app) {
    const router = expres.Router()
    const TipoEquipoServicio = new TipoEquipoServices()

    app.use('/api/inventario/tipoequipo', router)

    router.get('/', authenticate, authorize(['administrador']), async (req, res) => {
        const tipoequipos = await TipoEquipoServicio.ObtenerTipoEquipo()
        if (tipoequipos.error) {
            return res.status(500).json({ error: tipoequipos.error });
        }
        return res.status(200).json(tipoequipos)

    })

    router.post('/crear', authenticate, authorize(['administrador']), async (req, res) => {
        const nuevoTipoEquipo = await TipoEquipoServicio.CrearTipoEquipo(req.body)
        if (nuevoTipoEquipo.error) {
            return res.status(400).json({ error: nuevoTipoEquipo.error });
        }

        return res.status(201).json(nuevoTipoEquipo);
    })

    router.put('/actualizar/:id', authenticate, authorize(['administrador']), async (req, res) => {
        const tipoEquipoActualizado = await TipoEquipoServicio.ActualizarTipoEquipo(req.params.id, req.body)
        if (tipoEquipoActualizado.error) {
            return res.status(400).json({ error: tipoEquipoActualizado.error });
        }

        return res.status(201).json(tipoEquipoActualizado);
    })

}

module.exports = TipoEquipo