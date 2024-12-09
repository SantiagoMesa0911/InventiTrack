const InventarioModel = require('../models/InventarioModel')


class InventarioServices {
    async ObtenerInventario() {
        try {
            const inventario = await InventarioModel.find()
            return inventario
        } catch (error) {
            console.error(error)
            return { error: 'Error al obtener el inventario' }
        }
    }

    async CrearInventario(data) {
        try {
            const inventarioCreado = await InventarioModel.create(data)
            return inventarioCreado
        } catch (error) {
            console.error(error)
            return { error: 'Error al crear el inventario' }
        }
    }

    async ActualizarInventario(id, data) {
        try {
            const inventarioActualizado = await InventarioModel.findByIdAndUpdate(id, data, { new: true })
            return inventarioActualizado
        } catch (error) {
            console.error(error)
            return { error: 'Error al actualizar el inventario' }
        }
    }
}

module.exports = InventarioServices