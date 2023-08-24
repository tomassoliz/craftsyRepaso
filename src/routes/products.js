const express = require('express')
const router = express.Router()

const { detail, add, edit, create, update, remove } = require('../controllers/productsControllers')

// este es el enrutador y lo exportamos
// aca es donde recibe lo de app.js, la informacion

/* /products */

// aca la ruta recibe un parametro entonces por eso lleva "/:id", aca es donde viene la logica que cree antes

router
    .get('/detail/:id', detail)
    .get('/add', add)
    .post('/add', create)
    .get('/edit/:id', edit)
    .put('/update/:id', update)
    .delete('/remove/:id', remove)

module.exports = router

    // ruta que me renderiza el form va por get
    // ruta que me recibe informacion del form es el post
    // put : metodo http que me indica la accion de reemplazar un registro