const express = require('express')
const router = express.Router()
const ciudadControllers = require('../controllers/ciudadControllers')
const itineraryControllers = require('../controllers/itineraryControllers')


const { obtenerCiudades, crearCiudad , buscarCiudad ,  actualizarCiudad , borrarCiudad } = ciudadControllers

const {obtenerItineraries,crearItineraries , buscarItinerary , actualizarItinerary , borrarItinerary , itineraryforCity} = itineraryControllers
/* Hacemos un llamo tipo GET para imprimir los datos desde el backend */
router.route('/ciudades')
    .get(obtenerCiudades)
    .post(crearCiudad)



router.route('/ciudad/:id')    
    .get(buscarCiudad)
    .put(actualizarCiudad)
    .delete(borrarCiudad)


router.route('/itineraries')
    .get(obtenerItineraries)
    .post(crearItineraries)
  

router.route('/itinerary/:id')
    .get(buscarItinerary)
    .put(actualizarItinerary)
    .delete(borrarItinerary)
 
router.route('/itinerary/city/:id')
    .get(itineraryforCity) 


module.exports = router


