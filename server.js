const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const controller = require('./ComidasController');

const server = express()
server.use(cors());
server.use(bodyParser.json())

server.get('/comidas', (request, response) => {
    response.send(controller.getAll());
})

server.post('/comidas', (request, response) => {
    controller.add(request.body);
    response.send(201);
})

server.delete('/comidas/:id', (request, response) => {
    controller.remove(request.params.id);
    response.sendStatus(204);
})

server.listen(3010)
console.log('servidorzinho rodando na porta 3000');