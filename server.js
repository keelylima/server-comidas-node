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

server.get('/comidas/:id', (request, response) => {
    const id = request.params.id
    controller.getById(id)
    .then((comida) => {
        if(!comida){ //comida é undefined ou null
            response.sendStatus(404)
        } else {
            response.send(comida)
        }
    })
    .catch((error) => {
        if(error.name === "CastError"){
            response.sendStatus(400)
        } else {
            response.sendStatus(500)
        }
    })
    // const id = request.params.id;
    // response.send(controller.getById(id));
})

server.post('/comidas', (request, response) => {
    // response.status(200).send(controller.add(request.body));
    controller.add(request.body)
    .then((comida) => {
        const id = comida._id
        response.send(comida.id)
        // if(!comida.nome){
        //     response.sendStatus(404);
        // } else {
        //     response.send(comida.id);
        // }
    })
    .catch((error) => {
        if(error.name === "ValidationError") {
            response.sendStatus(400)
        } else {
            response.sendStatus(500)
        }
    })
})

server.patch('/comidas/:id', (request, response) => {
    const id = request.params.id;
    // const sucesso = controller.update(id, request.body);
    // if(sucesso) {
    //     response.sendStatus(204);
    // } else {
    //     response.sendStatus(404);
    // }
    controller.update(id, request.body)
    .then((comida) => {
        if(!comida) {
            response.sendStatus(404)
        } else {
            response.send(comida)
        }
    })
    .catch((error) => {
        if(error.name === "MongoError" || error.name === "CastError"){
            response.sendStatus(400) //bad request
        } else {
            response.sendStatus(500)
        }
    })
})

server.delete('/comidas/:id', async (request, response) => {
    // controller.remove(request.params.id);
    // response.sendStatus(204);
    controller.remove(request.params.id)
    .then((comida) =>{
        if(!comida) {
            response.sendStatus(404)
        } else {
            // response.send(comida)
            response.sendStatus(204)
        }
    })
    .catch((error) => {
        if(error) {
            response.sendStatus(500)
        }
    })
})

server.listen(3010)
console.log('servidorzinho rodando na porta 3000');