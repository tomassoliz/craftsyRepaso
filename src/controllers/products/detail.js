const { readJSON } = require('../../data');

module.exports = (req, res) => {
    // el req (request): vienen varios obejtos, lo cual podes recibir info del lado el cliente, en este caso viene como parametro por eso el "params"
    // llegas con un parametro, entonces capturas los parametros con el obejeto "params" seguido de la referencia al nombre de la constante en este caso "id"

    // find: para buscar
    // id: siempre viene en formato "string" por eso importante parciarlo
    // +id: este id viene por parametro

    const products = readJSON('products.json')

    const id = req.params.id;
    const product = products.find(product => product.id === id)

    // acotacion: como ya estamos usando el uuid el id ya no tiene que estar parseado

    return res.render('productDetail', {
        product
    })
}