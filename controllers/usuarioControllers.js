const User = require("../models/User")
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const usuarioControllers = {

    crearUsuario: async (req, res) => {

        var { firstName, lastName, email, country, password, userPic } = req.body

        const emailExistente = await User.findOne({ email })

        //Hasgeamos la password
        password = bcryptjs.hashSync(password, 10)
        var grabarUsuario
        let respuesta;
        let error;

        if (!emailExistente) {

            try {
                grabarUsuario = new User({ firstName, lastName, email, country, password, userPic })
                await grabarUsuario.save()
                //Creamos el token
                const token = jwt.sign({ ...grabarUsuario }, process.env.SECRET_OR_KEY)
                respuesta = token
            } catch {
                error = "Tuvimos un problema para grabar este usuario"
            }
        } else {

            error = "Este usuario ya esta existente en la base de datos"
        }
        res.json({

            success: !error ? true : false,
            respuesta: { token: respuesta, foto: grabarUsuario.userPic },
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
                //Creamos el token
                const token = jwt.sign({ ...usuarioExistente }, process.env.SECRET_OR_KEY)
                respuesta = token
            } else {
                error = "Usuario o password incorrecta"
            }
        } else {
            error = "Usuario o password incorrecta"
        }

        res.json({

            success: !error ? true : false,
            respuesta: { token: respuesta, foto: usuarioExistente.userPic },
            error: error

        })

    },

    loginForzado: (req, res) => {
        console.log(req)
        res.json({ success: true, respuesta: { foto: req.user.userPic } })
    }
}


module.exports = usuarioControllers