// no hace referencia al archivo index porque es lo primero que se lee
const { readJSON } = require('../data')

// como ya pusimos el metodo read y write ahora no traemos de esta manera *

// const tutorials = require('../data/tutorials.json')
// const products = require('../data/products.json')

module.exports = {
    index: (req, res) => {
        // * si no de esta para evitar el "desfazaje y no reiniciar el navegador"
        const tutorials = readJSON('tutorials.json');
        const products = readJSON('products.json');

        return res.render('index', {
            tutorials,
            products
            // mandar o filtrar lo que queres que haga: "products : products.filter(product => product.discount > 0)", esta es una forma, el problema es que en el carousell tmb se ve afectado
        })
    },
    admin: (req, res) => {
        const tutorials = readJSON('tutorials.json');
        const products = readJSON('products.json');

        return res.render('admin', {
            products,
            tutorials
        })
    }
}