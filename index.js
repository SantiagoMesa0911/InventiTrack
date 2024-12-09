const express = require('express');
const morgan = require('morgan');

const { port } = require('./Config/index');
const { connection } = require('./config/db');

const Usuarios = require('./Routes/Usuarios');
const Marca = require('./Routes/Marcas');
const Auth = require('./Auth/AuthRoutes');
const TipoEquipo = require('./Routes/TipoEquipo');
const EstadoEquipo = require('./Routes/EstadoEquipo');
const Inventario = require('./Routes/Inventario');


const app = express();
connection(); 


app.use(express.json());
app.use(morgan('dev'));


Usuarios(app)
Marca(app)
Auth(app)
TipoEquipo(app)
EstadoEquipo(app)
Inventario(app)

app.get("/", (req, res) => {
    return res.json({ name: "API OF THE INVENTITRACK" });
});



app.listen(port, async () => {
    console.log(`El servidor está corriendo en http://localhost:${port}`);
   
});