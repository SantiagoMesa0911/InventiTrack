const expres = require('express')
const MarcaServices = require('../services/MarcaServices')
const authorize = require('../Middlewares/authorize')
const authenticate = require('../Middlewares/authenticate')


function Marca(app) {
    const router = expres.Router()
    const MarcaServicio = new MarcaServices()

    app.use('/api/inventario/marcas', router)

    router.get('/', authenticate, authorize(['administrador','docente']), async (req, res) => {
        const marcas = await MarcaServicio.ObtenerMarcas()
        if (marcas.error) {
            return res.status(500).json({ error: marcas.error });
        }
        return res.status(200).json(marcas)

    })

    router.post('/crear', async (req, res) => {
        const nuevaMarca = await MarcaServicio.CrearMarca(req.body)
        if (nuevaMarca.error) {
            return res.status(400).json({ error: nuevaMarca.error });
        }

        return res.status(201).json(nuevaMarca);
    })

}

module.exports = Marca