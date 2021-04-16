const express = require('express')
const router = express.Router()
const  tareasControllers = require('../controllers/taresControllers')


const { obtenerCiudades, crearCiudad , buscarCiudad ,  actualizarCiudad , borrarCiudad } = tareasControllers

/* Hacemos un llamo tipo GET para imprimir los datos desde el backend */
router.route('/ciudades')
    .get(obtenerCiudades)
    .post(crearCiudad)



router.route('/ciudad/:id')    
    .get(buscarCiudad)
    .put(actualizarCiudad)
    .delete(borrarCiudad)

module.exports = router



