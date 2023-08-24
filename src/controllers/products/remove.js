const { readJSON, writeJSON } = require("../../data")

module.exports = (req, res) => {

    const products = readJSON('products.json')
    const id = req.params.id 

    // filtra para que me devuelve todo los producto cuyo id sean distinto al id que estoy haciendo por parametro, quedando afuera el id que coincide
    const productsModify = products.filter(product => product.id !== id)

    writeJSON(productsModify, 'products.json')

    return res.redirect('/admin')
}

// filter: crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.