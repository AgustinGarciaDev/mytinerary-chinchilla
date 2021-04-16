const Ciudad = require('../models/Ciudad')

const ciudadesApi = [
     /* 
           { id: 1, nombre: "Paris", url: 'http://baravdg.com/wp-content/uploads/2021/04/pexels-thorsten-technoman-338515-scaled.jpg', slide:"A"},
           {id: 2,nombre:"Queenstown" ,url: 'http://baravdg.com/wp-content/uploads/2021/04/pexels-ketan-kumawat-724963-scaled.jpg'},
           {id: 3, nombre:"Rio de Janeiro" , url: 'http://baravdg.com/wp-content/uploads/2021/04/rio-de-janeiro-1963744_1920.jpg'},
           {id: 4, nombre:"San Francisco" , url: 'http://baravdg.com/wp-content/uploads/2021/04/san-francisco-1116316_1280.jpg'},
           {id: 5, nombre:"Osaka", url: 'http://baravdg.com/wp-content/uploads/2021/04/Paisaje_-9.png' ,slide:"B"},
           {id: 6, nombre:"Bruges", url: 'http://baravdg.com/wp-content/uploads/2021/04/pexels-barb-duggan-3633115-scaled.jpg'},
           {id: 7, nombre:"Florence", url: 'http://baravdg.com/wp-content/uploads/2021/04/Paisaje_-6.png'},
           {id: 8, nombre:"Istanbul", url: 'http://baravdg.com/wp-content/uploads/2021/04/pexels-caner-cankisi-3999943-scaled.jpg'},
           {id: 9, nombre:"Rome", url: 'http://baravdg.com/wp-content/uploads/2021/04/rome-4087275_1920.jpg', slide:"C"},
           {id: 10, nombre:"Seville", url: 'http://baravdg.com/wp-content/uploads/2021/04/Diseno-sin-titulo-2.png'},
           {id: 11, nombre:"Amsterdam", url: 'http://baravdg.com/wp-content/uploads/2021/04/pexels-harvey-1790573-scaled.jpg'},
           { id: 12, nombre: "London", url: 'http://baravdg.com/wp-content/uploads/2021/04/pexels-pixabay-460672.jpg' },
           { id: 13, nombre: "Praga", url: 'http://baravdg.com/wp-content/uploads/2021/04/pexels-thorsten-technoman-338515-scaled.jpg', slide:"A"}, */
  ]


const tareasControllers = {
  
    //El controlador es asincrono

    obtenerCiudades: async(req, res) => {
      
        const todasCiudades = await Ciudad.find()
        console.log(todasCiudades)
        res.json({success:true , respuesta: todasCiudades})

    },


    crearCiudad: async(req, res) => {
        
        const {nombre,url , descripcion} = req.body
       
        const ciudadACrear = new Ciudad({

            nombre: nombre,
            url: url,
            descripcion: descripcion,
        })
        
        // toda manipulacion de de base de datos es  asincrona 
        await ciudadACrear.save()
        
        const todasCiudades = await Ciudad.find()
         res.json({success:true , respuesta: todasCiudades})
    },

    buscarCiudad: (req, res) => {
       
     let id = parseInt(req.params.idCiudadRuta)
   
     let ciudadCopia = [...ciudadesApi]

     ciudadCopia = ciudadCopia.filter(ciudad => ciudad.id === id)

     res.json({respuesta: ciudadCopia , success:true})

    },

    actualizarCiudad:(req, res) => {
     
         console.log("vamos a actualizar algun dato de la ciudad")
    
    },
    
    borrarCiudad: (req, res) => {
     
         console.log("Borramos la ciudad por el id")
    
      }
  
}
module.exports = tareasControllers