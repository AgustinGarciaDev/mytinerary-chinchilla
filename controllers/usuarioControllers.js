const  User = require ("../models/User")

const usuarioControllers = {

    crearUsuario: async (req, res) => {
        
        const { firstName, lastName, email,country , password , userPic} = req.body
        
        const emailExistente = await User.findOne({ email })
        
        let respuesta;
        let error;

        if (!emailExistente) {
            
            try {
               
                const grabarUsuario = new User({ firstName, lastName, email, country, password, userPic })
                await grabarUsuario.save()
                respuesta = grabarUsuario
                
            } catch {
               
                error = "Tuvimos un problema para grabar este usuario"
            }
        } else {
            
            error="Este usuario ya esta existente en la base de datos"
        }
        
        res.json({

            success: !error ? true : false,
            respuesta: respuesta,
            error:error

        })
    
        
    },

    logearUsuario: (req,res) => {
         console.log("Logueaste un usuario")
    }
}


module.exports = usuarioControllers