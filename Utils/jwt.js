const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../Config/index');

function generateToken(user) {
    const payload = {
        id: user._id,
        rol: user.rol,
        iat: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000) + (60 * 60)
    };
    return jwt.sign(payload, JWT_SECRET_KEY);
}

module.exports = generateToken;