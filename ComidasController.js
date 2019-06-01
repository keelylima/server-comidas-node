const repository = require('./ComidasRepository')
const getAll = () => {
    return repository.comidas;
}

const add = (comida) => {
    comida.id = Math.random().toString(36).substr(-8); 
    // comidas.prato.push(comida)
    getAll().prato.push(comida);
}

const remove = (id) => {
    
    getAll().prato = getAll().prato.filter((item) => {
        return item.id !== id;
    })

} 

module.exports = {
    getAll,
    add,
    remove
}