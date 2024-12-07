const TipoEquipoModel = require('../Models/TipoEquipoModel')

class TipoEquipoServices {
    async ObtenerTipoEquipo() {
        try {
            const tipoequipo = await TipoEquipoModel.find(({
                estado: true
            }))
            return tipoequipo
        } catch (error) {
            console.error(error)
            return { error: 'Error al obtener los tipo de equipo' }
        }
    }


    async CrearTipoEquipo(data) {
        try {
            const NuevoTipoEquipo = await TipoEquipoModel.create(data)
            return NuevoTipoEquipo
        } catch (error) {
            console.log(error);
            return {
                error: 'Error al crear el tipo de equipo'
            }
        }
    }
}
module.exports = TipoEquipoServices