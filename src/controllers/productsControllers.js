// const { readJSON, writeJSON } = require('../data');
const Product = require('../data/product');

// aca es dode deriva de routes, conotrollers recibe la info donde termina de renderizar las vistas
// const tutorials = require('../data/tutorials.json')
// const products = require('../data/products.json')

module.exports = {
    detail: require('./products/detail'),
    add: require('./products/add'),
    create: require('./products/create') ,
    edit: require('./products/edit'),
    update: require('./products/update'),
    remove: require('./products/remove')
};


