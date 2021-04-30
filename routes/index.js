const express = require('express')
const router = express.Router()
const ciudadControllers = require('../controllers/ciudadControllers')
const itineraryControllers = require('../controllers/itineraryControllers')
const usuarioControllers = require('../controllers/usuarioControllers')
const passport = require('passport')
const validator = require('../config/validator')


const { obtenerCiudades, crearCiudad, buscarCiudad, actualizarCiudad, borrarCiudad } = ciudadControllers
const { obtenerItineraries, crearItineraries, buscarItinerary, actualizarItinerary, borrarItinerary, itineraryforCity } = itineraryControllers
const { crearUsuario, logearUsuario, loginForzado } = usuarioControllers

/* Ciudades */
router.route('/ciudades')
    .get(obtenerCiudades)
    .post(crearCiudad)

router.route('/ciudad/:id')
    .get(buscarCiudad)
    .put(actualizarCiudad)
    .delete(borrarCiudad)


/* Itineraries */
router.route('/itineraries')
    .get(obtenerItineraries)
    .post(crearItineraries)

router.route('/itinerary/:id')
    .get(buscarItinerary)
    .put(actualizarItinerary)
    .delete(borrarItinerary)

router.route('/itinerary/city/:id')
    .get(itineraryforCity)

/* Usuarios */

router.route('/user/signUp')
    .post(validator, crearUsuario)

router.route('/user/signIn')
    .post(validator, logearUsuario)

router.route('/user/loginLocalStore')
    .get(passport.authenticate('jwt', { session: false }), loginForzado)

module.exports = router


