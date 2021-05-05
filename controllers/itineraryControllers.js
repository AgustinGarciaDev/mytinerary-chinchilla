const Itinerary = require('../models/Itinerary')

const itineraryControllers = {

    obtenerItineraries: async (req, res) => {

        try {

            const todosItinerary = await Itinerary.find().populate('comments.userId')
            res.json({ success: true, respuesta: todosItinerary })


        } catch (error) {
            res.json({ success: false, respuesta: "No pudimos obtener los itineraries" })
        }
    },

    crearItineraries: async (req, res) => {

        const { nombreItinerary, authorName, authorPic, precie, likes, hastag, duracion, picBanner, idCity, countryCoin, offered, comments } = req.body

        try {
            const itineraryACrear = new Itinerary({
                nombreItinerary: nombreItinerary,
                authorName: authorName,
                authorPic: authorPic,
                precie: precie,
                likes: likes,
                hastag: hastag,
                idCity: idCity,
                duracion: duracion,
                picBanner: picBanner,
                countryCoin: countryCoin,
                offered: offered,
                comments: comments
            })
            await itineraryACrear.save()
            const todosItinerary = await Itinerary.find()
            res.json({ success: true, respuesta: todosItinerary })
        } catch (error) {
            res.json({ success: false, respuesta: "No se pudo crear un itinerary" })
        }
    },

    buscarItinerary: async (req, res) => {

        let id = req.params.id

        try {
            const buscarItinerary = await Itinerary.findById(id).populate('idCity')

            res.json({ sucess: true, respuesta: buscarItinerary })
        } catch (error) {
            res.json({ success: false, respuesta: "No se encontro un itinerary con ese ID" + id })
        }
    },

    actualizarItinerary: async (req, res) => {
        let id = req.params.id
        try {
            await Itinerary.findOneAndUpdate({ _id: id }, { ...req.body })
            const todosItinerary = await Itinerary.find()
            res.json({ success: true, respuesta: todosItinerary })
        } catch (error) {
            res.json({ success: false, respuesta: "No se puede actualizar el itinerary con el  " + id })
        }
    },

    borrarItinerary: async (req, res) => {

        const id = req.params.id

        try {
            await Itinerary.findOneAndRemove({ _id: id })
            const todosItinerary = await Itinerary.find()
            res.json({ success: true, respuesta: todosItinerary })
        } catch (error) {
            res.json({ success: false, respuesta: "No pudimos borrar el itinerary con el  " + id })
        }

    },

    itineraryforCity: async (req, res) => {
        const id = req.params.id
        try {
            const coincidenciasCiudad = await Itinerary.find({ idCity: id })
            res.json({ success: true, respuesta: coincidenciasCiudad })
        } catch (error) {
            res.json({ success: false, respuesta: "No tiene itinerarios asociados a este   " + id })
        }
    },

    cargarComentarios: async (req, res) => {

        const idItinerari = req.params.id
        const idUsuario = req.user._id
        const { mensaje } = req.body

        try {
            const comentarioNuevo = await Itinerary.findOneAndUpdate(
                { _id: idItinerari },
                { $push: { comments: { userId: idUsuario, comment: mensaje } } },
                { new: true }).populate('comments.userId')

            comentarioNuevo.save()
            res.json({ success: true, respuesta: comentarioNuevo })
        } catch (error) {
            console.log(error)
        }
    },

    borrarComentario: async (req, res) => {

        console.log(req.body)

        try {


            /*   await Itinerary.findOneAndRemove() */

        } catch (error) {

            console.log(error)
        }

    },
    editarComentarios: async (req, res) => {

    },

}

module.exports = itineraryControllers