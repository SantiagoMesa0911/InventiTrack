const MarcaModel = require('../Models/MarcasModel')

class MarcaServices {
    async ObtenerMarcas() {
        try {
            const marcas = await MarcaModel.find(({
                estado: true
            }))
            return marcas
        } catch (error) {
            console.error(error)
            return { error: 'Error al obtener las marcas' }
        }
    }


    async CrearMarca(data) {
        try {
            const NuevoUsuarios = await MarcaModel.create(data)
            return NuevoUsuarios
        } catch (error) {
            console.log(error);
            return {
                error: 'Error al crear la marcas'
            }
        }
    }
}
module.exports = MarcaServices