const { readFileSync, writeFileSync } = require('fs')
const path = require('path')

// parsear el json como parametro (json) con el metodo correspondiente (read y write)
const readJSON = (json) =>
    JSON.parse(readFileSync(path.join(__dirname, json), 'utf-8'));

const writeJSON = (array, file) =>
    writeFileSync(path.join(__dirname, file), JSON.stringify(array, null, 3), 'utf-8')
// escribime en el archivo de "file", que quiere que me escribas el array que me pasa por parametro

module.exports = {
    readJSON,
    writeJSON
}