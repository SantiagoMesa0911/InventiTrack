const UsuariosModel = require('../Models/UsuariosModel');
const { generateToken } = require('../Utils/jwt');

class AuthServices {
    async login(req, res) {
        const { email, password } = req.body;
        try {
            const user = await UsuariosModel.findOne({ email });
            if (!user) {
                return res.status(404).json({ error: 'Usuario no encontrado' });
            }

            const isMatch = await user.comparePassword(password);
            if (!isMatch) {
                return res.status(401).json({ error: 'Contraseña incorrecta' });
            }

            const token = generateToken(user);
            return res.status(200).json({ token, user: { id: user._id, rol: user.rol } });
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            return res.status(500).json({ error: 'Error al iniciar sesión', message: error.message });
        }
    }
}

module.exports = AuthServices;