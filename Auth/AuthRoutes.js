const express = require('express')
const AuthSercives = require('./AuthServices');

function Auth(app) {
    const router = express.Router();
    const AuthServicio = new AuthSercives()

    app.use('/api/inventario/auth', router);

    router.post('/login', async (req, res) => {
        await AuthServicio.login(req, res);
    });
}



module.exports = Auth;