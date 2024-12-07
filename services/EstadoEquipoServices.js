const EstadoEquipoModel = require('../Models/EstadoEquipoModel')

class EstadoEquipoServices {
    async ObtenerEstadoEquipo() {
        try {
            const estadoequipo = await EstadoEquipoModel.find(({
                estado: true
            }))
            return estadoequipo
        } catch (error) {
            console.error(error)
            return { error: 'Error al obtener los estados de equipo' }
        }
    }


    async CrearEstadoEquipo(data) {
        try {
            const NuevoEstadoEquipo = await EstadoEquipoModel.create(data)
            return NuevoEstadoEquipo
        } catch (error) {
            console.log(error);
            return {
                error: 'Error al crear el estado de equipo'
            }
        }
    }
}
module.exports = EstadoEquipoServices