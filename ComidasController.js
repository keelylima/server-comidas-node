const repository = require('./ComidasRepository')
const getAll = () => {
    return repository.comidas;
}

const add = (comida) => {
    comida.id = Math.random().toString(36).substr(-8);
    // comidas.prato.push(comida)
    getAll().prato.push(comida);
}

const update = (id, comida) => {
    let comidaCadastrada = getAll().prato.find((item) => {
        return item.id === id;
    })
    if (comidaCadastrada === undefined) {
        return false;
    } else {
        // if (comida.nome) { //if(comida.nome !== undefined)
        //     comidaCadastrada.nome = comida.nome;
        // }
        // if (comida.descricao) {
        //     comidaCadastrada.descricao = comida.descricao;
        // }

        const comidaAtualizada = {
            ...comidaCadastrada, //spread operator do ES6
            ...comida
        }

        remove(id)
        getAll().prato.push(comidaAtualizada);

        return true;
    }
}

const remove = (id) => {

    getAll().prato = getAll().prato.filter((item) => {
        return item.id !== id;
    })

}

module.exports = {
    getAll,
    add,
    remove,
    update
}