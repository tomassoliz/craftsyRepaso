const { readJSON, writeJSON } = require("../../data")

module.exports = (req, res) => {

    const products = readJSON('products.json')
    const id = req.params.id;
    const { name, brand, description, price, discount } = req.body

    const productsModify = products.map(product => {
        if (product.id === id) {
            product.name = name.trim();
            product.brand = brand;
            product.description = description.trim();
            product.price = +price;
            product.discount = +discount;
            product.createdAt = new Date();
        }
        return product
    })

    // acotacion: (primero recibe el array, recibe el archivo donde lo quiero guardar), la logica de index.js en data
    writeJSON(productsModify, 'products.json')

    return res.redirect('/admin')
}


// map: crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.