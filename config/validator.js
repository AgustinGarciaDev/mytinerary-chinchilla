const Joi = require('joi')



const validator = (req, res, next) => {

    const schema = Joi.object({

        firstName: Joi.string().trim().min(3).max(20).required().messages({
            'string.base': 'No te pase de gato',
            'string.min': 'Este campo necesita un minimo de 3 caracteres',
            'string.max': 'WOW tan largo el nombre pa? No me kieras cagar EH',
            'any.required': 'Este es un campo requerido',
            'string.empty': 'KAPO LLENA ESTE CAMPO',

        }),
        lastName: Joi.string().trim().min(3).max(20).required().messages({
            'string.base': 'No te pase de gato',
            'string.min': 'Este campo necesita un minimo de 3 caracteres',
            'string.max': 'WOW tan largo el nombre pa? No me kieras cagar EH',
            'any.required': 'Este es un campo requerido',
            'string.empty': 'KAPO LLENA ESTE CAMPO',

        }),
        email: Joi.string().trim().required().email().messages({
            'string.base': 'No te pase de gato',
            'any.required': 'Este es un campo requerido',
            'string.empty': 'KAPO LLENA ESTE CAMPO',

        }),
        password: Joi.string().trim().min(6).max(20).required().pattern(/(?=.*\d)(?=.*[A-z]{3,30})/).messages({
            'string.base': 'No te pase de gato',
            'string.min': 'Este campo necesita un minimo de 6 caracteres',
            'string.max': 'WOW tan largo el nombre pa? No me kieras cagar EH',
            'any.required': 'Este es un campo requerido',
            'string.empty': 'KAPO LLENA ESTE CAMPO',
            'string.pattern.base': 'pone una contra correcta maestro'

        }),
        userPic: Joi.string().trim().required().uri().messages({
            'string.base': 'No te pase de gato',
            'string.uri': 'este URL no es valido',
            'any.required': 'Este es un campo requerido',
            'string.empty': 'KAPO LLENA ESTE CAMPO',

        }),
        country: Joi.string().required().messages({
            'string.base': 'No te pase de gato',
            'string.min': 'Este campo necesita un minimo de 3 caracteres',
            'string.max': 'WOW tan largo el nombre pa? No me kieras cagar EH',
            'any.required': 'Este es un campo requerido',
            'string.empty': 'KAPO LLENA ESTE CAMPO',

        })
    })

    //Validador
    //El abortEearly en false hace que la operacion no se corte apenas encuentre un error

    const validation = schema.validate(req.body, { abortEarly: false })

    //Da una respuesta al frontend con el error o sigue al next

    if (validation.error) {

        return res.json({ success: false, errores: validation.error })
    }

    next()
}

console.log(validator)



module.exports = validator