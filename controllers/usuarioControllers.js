const User = require("../models/User")
const bcryptjs = require('bcryptjs')

const usuarioControllers = {

    crearUsuario: async (req, res) => {

        var { firstName, lastName, email, country, password, userPic } = req.body

        const emailExistente = await User.findOne({ email })

        //Hasgeamos la password
        password = bcryptjs.hashSync(password, 10)

        let respuesta;
        let error;

        if (!emailExistente) {

            try {
                console.log(req.body)
                const grabarUsuario = new User({ firstName, lastName, email, country, password, userPic })
                await grabarUsuario.save()
                respuesta = grabarUsuario

            } catch {

                error = "Tuvimos un problema para grabar este usuario"
            }
        } else {

            error = "Este usuario ya esta existente en la base de datos"
        }

        res.json({

            success: !error ? true : false,
            respuesta: respuesta,
            error: error

        })


    },

    logearUsuario: async (req, res) => {
        var { email, password } = req.body
        var respuesta
        var error

        const usuarioExistente = await User.findOne({ email })

        if (usuarioExistente) {

            const passwordCorrecta = bcryptjs.compareSync(password, usuarioExistente.password)
            if (passwordCorrecta) {
                respuesta = usuarioExistente
            } else {
                error = "Usuario o password incorrecta"
            }
        } else {
            error = "Usuario o password incorrecta"
        }

        res.json({

            success: !error ? true : false,
            respuesta: respuesta,
            error: error

        })

    }
}


module.exports = usuarioControllers