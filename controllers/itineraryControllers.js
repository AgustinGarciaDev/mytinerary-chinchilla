const Itinerary = require('../models/Itinerary')

const itineraryControllers = {

    obtenerItineraries: async (req, res) => {

        try {
            const todosItinerary = await Itinerary.find()
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
            const coincidenciasCiudad = await Itinerary.find({ idCity: id }).populate({ path: "comments", populate: { path: "userId", select: { "firstName": 1, "lastName": 1, "email": 1, "userPic": 1 } } })
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
                { new: true }).populate({ path: "comments", populate: { path: "userId", select: { "firstName": 1, "lastName": 1, "email": 1, "userPic": 1 } } })

            comentarioNuevo.save()
            res.json({ success: true, respuesta: comentarioNuevo.comments })
        } catch (error) {
            console.log(error)
        }
    },

    borrarComentario: async (req, res) => {
        const idItinerari = req.params.id
        console.log(idItinerari)

        const { id } = req.body
        try {
            const borrarComentario = await Itinerary.findOneAndUpdate(
                { _id: idItinerari },
                { $pull: { comments: { _id: id } } },
                { new: true }).populate({ path: "comments", populate: { path: "userId", select: { "firstName": 1, "lastName": 1, "email": 1, "userPic": 1 } } })
            borrarComentario.save()
            res.json({ success: true, respuesta: borrarComentario.comments })

        } catch (error) {

            console.log(error)
        }

    },
    editarComentarios: async (req, res) => {
        const idItinerari = req.params.id

        const idUsuario = req.user._id

        const { idComentario, comment } = req.body
        try {
            const editarComentario = await Itinerary.findOneAndUpdate(
                { _id: idItinerari, "comments._id": idComentario },
                { $set: { "comments.$.comment": comment } },
                { new: true }
            ).populate({ path: "comments", populate: { path: "userId", select: { "firstName": 1, "lastName": 1, "email": 1, "userPic": 1 } } })
            editarComentario.save()
            res.json({ success: true, respuesta: editarComentario.comments })

        } catch (error) {
            console.log(error)
        }
    },

    likeItinerario: async (req, res) => {
        const idItinerari = req.params.id
        const { data: { email } } = req.body

        const usuarioEmail = await Itinerary.findOne({ _id: idItinerari, "userLiked": email })
        try {

            if (usuarioEmail) {
                const likeComentario = await Itinerary.findOneAndUpdate(
                    { _id: idItinerari },
                    { $pull: { userLiked: email } },
                    { new: true }
                )
                const id = await Itinerary.findById(idItinerari)
                const aumetarLike = await Itinerary.findOneAndUpdate(
                    { _id: idItinerari },
                    { likes: id.userLiked.length },
                    { new: true }
                )
                res.json({ success: true, respuesta: { btnStatus: false, usuariosLikes: likeComentario.userLiked, likes: aumetarLike.likes } })
            } else {
                const likeComentario = await Itinerary.findOneAndUpdate(
                    { _id: idItinerari },
                    { $push: { userLiked: email } },
                    { new: true }
                )

                const id = await Itinerary.findById(idItinerari)
                const aumetarLike = await Itinerary.findOneAndUpdate(
                    { _id: idItinerari },
                    { likes: id.userLiked.length },
                    { new: true }
                )
                res.json({ success: true, respuesta: { btnStatus: true, usuariosLikes: likeComentario.userLiked, likes: aumetarLike.likes } })
            }


        } catch (error) {
            console.log(error)
        }
    },


}

module.exports = itineraryControllers