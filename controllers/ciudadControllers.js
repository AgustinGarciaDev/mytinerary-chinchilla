const Ciudad = require('../models/Ciudad')


const ciudadControllers = {
  
    //El controlador es asincrono
    
    obtenerCiudades: async(req, res) => {
      
        try {
            const todasCiudades = await Ciudad.find()
            res.json({ success: true, respuesta: todasCiudades })
        
        } catch (error) {
              res.json({ respuesta: "A ocurrido un error al obtener las ciudades", success: false })
        }
        
    },


    crearCiudad: async(req, res) => {
        
        const {nombre,url , descripcion} = req.body
       
        try {
            const ciudadACrear = new Ciudad({

                nombre: nombre,
                url: url,
                descripcion: descripcion,
            })

            await ciudadACrear.save()
            const todasCiudades = await Ciudad.find()
            res.json({ success: true, respuesta: todasCiudades })
        
        } catch (error) {
                res.json({ respuesta: "A ocurrido un error al crear la ciudad", success: false })
            
        }
    },

    buscarCiudad: async(req, res) => {
       
        let id = req.params.id

        try {
            const buscarCiudad = await Ciudad.findById(id)
            res.json({ respuesta: buscarCiudad, success: true })
        } catch (error) {
             res.json({ respuesta: "A ocurrido un error inesperado", success: false })
        }

    },

    actualizarCiudad: async(req, res) => {
     
        let id = req.params.id

        try {
            await Ciudad.findOneAndUpdate({ _id: id }, req.body )
            console.log(req.body)
            const todasCiudades = await Ciudad.find()    
            res.json({ respuesta: todasCiudades, success: true })
        } catch (error) {
           res.json({ respuesta: "A ocurrido un error al actualizar la ciudad", success: false })
        }
   
    
    },
    
    borrarCiudad: async (req, res) => {
     
        let id = req.params.id

        try {
            await Ciudad.findOneAndRemove({ _id: id })
            const todasCiudades = await Ciudad.find()
            res.json({ respuesta: todasCiudades, success: true })
      
        } catch (error) {   
         res.json({ respuesta: "A ocurrido un error al borrar la ciudad", success: false })
        }
      }
  
}
module.exports = ciudadControllers