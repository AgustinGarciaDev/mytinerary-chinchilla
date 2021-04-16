//Tenemos un modelo por coleccion

const mongoose = require('mongoose')

//Esquema
const ciudadSchema = new mongoose.Schema({

    nombre: { type: String, required: true },
    url: {type: String, required: true},
    descripcion: {type: String}
    
})

//Modelo la coleccion la ponemos en ingles en singular mongo
//Hace la pluralizacion

const Ciudad = mongoose.model('city', ciudadSchema)

module.exports = Ciudad