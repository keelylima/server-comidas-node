const { connect } = require('./ComidasRepository');
const { comidasModel } = require('./ComidasSchema');
connect()

// const repository = require('./ComidasRepository')
// repository.connect();

const getAll = async () => {
    return comidasModel.find((error, comidas) => {
        if(error) {
            console.error(error);
        }
        return comidas;
    });
}

const getById = async (id) => {
    return comidasModel.findById(
        id,
        function(error, comida) {
            return comida;
        }
    )

    // const comidaCadastrada = getAll().find((item) => {
    //     return item.id === id;
    // })
    // return comidaCadastrada;
}

const add = (comida) => {
    const novaComida = new comidasModel({
        nome: comida.nome,
        descricao: comida.descricao
    })
    novaComida.save()
}

const update = (id, comida) => {
    let comidaCadastrada = getAll().find((item) => {
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
        getAll().push(comidaAtualizada);

        return true;
    }
}

const remove = (id) => {

    getAll().prato = getAll().filter((item) => {
        return item.id !== id;
    })

}

module.exports = {
    getAll,
    add,
    remove,
    update,
    getById
}