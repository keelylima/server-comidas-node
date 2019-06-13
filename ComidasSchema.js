const mongoose = require('mongoose');

//cada schema equivale a collection
const Schema = mongoose.Schema;
const ComidasSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    nome: { type: String, required: true },
    descricao: { type: String },
    valor: { type: Number},
    img: { type: String }
})

const comidasModel = mongoose.model('comidas', ComidasSchema);

module.exports = { comidasModel };