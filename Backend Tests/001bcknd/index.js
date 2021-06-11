// Parte 1, Inicializando Express
const express = require('express');
const app = express();

const router = require('./routes')

// Parte 2, Configurando la primera parte de Express (Middlewares)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Parte 4, 
app.use('/api/v1', router)

// Parte 3, Levantando la app
app.listen(4000, function () {
    console.log('server is on');
})