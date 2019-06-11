const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const controller = require('./ComidasController');

const server = express();
server.use(cors());
server.use(bodyParser.json())

server.get('/comidas',  async (request, response) => {
    // response.send(controller.getAll());
    controller.getAll()
    .then((listaDeComidas) => response.send(listaDeComidas));
})

server.get('/comidas/:id', async (request, response) => {
    const id = request.params.id
    controller.getById(id)
    .then((comida) => response.send(comida));
    // const id = request.params.id;
    // response.send(controller.getById(id));
})

server.post('/comidas', (request, response) => {
    response.status(200).send(controller.add(request.body));
})

server.patch('/comidas/:id', (request, response) => {
    const id = request.params.id;
    const sucesso = controller.update(id, request.body);
    if(sucesso) {
        response.sendStatus(204);
    } else {
        response.sendStatus(404);
    }
})

server.delete('/comidas/:id', (request, response) => {
    controller.remove(request.params.id);
    response.sendStatus(204);
})

server.listen(3010)
console.log('servidorzinho rodando na porta 3000');