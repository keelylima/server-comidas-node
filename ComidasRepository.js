const mongoose = require('mongoose');
//string de conexao: mongodb://dominio:porta/nome_database

const MONGO_URL = "mongodb://localhost:27017/reprograma";

function connect() {
    //TODO: conectar no nosso monngo usando a MONGO_URL
    mongoose.connect(MONGO_URL, {useNewUrlParser: true}, function(error) {
        if(error) {
            console.error('Deu erro: ', error);
        } else {
            console.log('Sucessoo!!')
        }
    });
}

module.exports = { connect }