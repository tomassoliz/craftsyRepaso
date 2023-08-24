const { readJSON, writeJSON } = require('../../data');

module.exports = (req, res) => {
    // me traigo el readJSON y lo uso donde lo necesito rectificando arriba en las const
    const products = readJSON('products.json')

    let newProduct = new Product(req.body)

    // push : añade uno o más elementos al final de un array y devuelve la nueva longitud del array
    products.push(newProduct)

    writeJSON(products, 'products.json');


    // cuando uno envia datos por post estos viajan en el objeto body, retornando lo que me devuelve. Imagen viene por file, no por body
    // res.send: envia texto en este caso en formato json
    // return res.send(products)

    // recibe un ruta res.redirect
    return res.redirect('/admin')
}

/* let newProduct = {
    // Para hacer referencia a la posicion array le paso entre llave la posicion
    // La posicion esta determinada por el atributo length
    // length : devuelve el total de elementos
    // trim : elimina los espacios en blanco en ambos extremos del string
    // trim es para poner donde el usuario escribe, para evitar el espacio innecesarios 
    id: products[products.length - 1].id + 1,
    name: name.trim(),
    brand,
    price: +price,
    discount: +discount,
    description: description.trim()
} */