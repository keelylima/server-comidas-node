const express = require('express');
const cors = require('cors');
const controller = require('./ComidasController');



const server = express()

server.use(cors());
server.get('/comidas', (request, response) => {
    response.send(controller.getAll());
})

server.listen(3010)
console.log('servidorzinho rodando na porta 3000'); //mostra no terminal