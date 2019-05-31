const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const controller = require('./ComidasController');



const server = express()

server.use(cors());
server.get('/comidas', (request, response) => {
    response.send(controller.getAll());
})

server.post('/comidas', bodyParser.json(), (request, response) => {
    controller.add(request.body);
    response.send(201);
    // response.send(controller.add(request.body));
})

server.listen(3000)
console.log('servidorzinho rodando na porta 3000'); //mostra no terminal