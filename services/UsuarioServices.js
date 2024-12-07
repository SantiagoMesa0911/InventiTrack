const UsuarioModel = require('../Models/UsuariosModel')


class UsuarioServices {
    async ObtenerUsuarios() {
        try {
            const usuarios = await UsuarioModel.find(({
                estado: true
            }))
            return usuarios
        } catch (error) {
            console.error(error)
            return { error: 'Error al obtener los usuarios' }
        }
    }

    async CrearUsuarios(data) {
        try {
            const NuevoUsuarios = await UsuarioModel.create(data)
            return NuevoUsuarios
        } catch (error) {
            console.error(error);
            return { error: 'Error al crear el género' };
        }
    }
}

module.exports = UsuarioServices;