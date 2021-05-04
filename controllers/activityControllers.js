const Activity = require('../models/Activity')


const activityControllers = {

    obtenerActivities: async (req, res) => {

        try {

            const todasLasActividades = await Activity.find()
            res.json({ sucesses: true, respuesta: todasLasActividades })

        } catch {
            res.json({ success: false, respuesta: "No pudimos obtener todas las actividades" })
        }

    },



    crearActivity: async (req, res) => {
        const { activities, idItinerary } = req.body

        try {
            const crearActividades = new Activity({ activities, idItinerary })
            await crearActividades.save()
            const todasLasActividades = await Activity.find()
            res.json({ sucesses: true, respuesta: todasLasActividades })


        } catch {
            res.json({ success: false, respuesta: "No se pudieron crear las actividades" })
        }

    },


    actualizarActividades: async (req, res) => {
        const id = req.params.id
        try {
            await Activity.findOneAndUpdate({ _id: id }, { ...req.body })
            const todasActividades = await Activity.find()
            res.json({ success: true, respuesta: todasActividades })

        } catch {
            res.json({ success: false, respuesta: "No se encontraron las actividades con este ID: " + id })
        }

    },

    borrarActivity: async (req, res) => {
        const id = req.params.id
        try {
            await Activity.findOneAndRemove({ _id: id })
            const todasActividades = await Activity.find()
            res.json({ success: true, respuesta: todasActividades })
        } catch {
            res.json({ success: false, respuesta: "No pudimos borrar las actividades con el  " + id })
        }


    },

    activityForItinerary: async (req, res) => {

        const id = req.params.id
        try {
            const actividadesDeUnItinerary = await Activity.findOne({ idItinerary: id })
            res.json({ success: true, respuesta: actividadesDeUnItinerary })

        } catch {
            res.json({ success: false, respuesta: "No tiene actividades asociados a este ID:   " + id })
        }
    },

}

module.exports = activityControllers