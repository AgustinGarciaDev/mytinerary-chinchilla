const Joi = require('joi')
const validator = (req, res, next) => {

    const schema = Joi.object({

        firstName: Joi.string().trim().min(3).pattern(new RegExp('[a-zA-Z]$')).required().messages({
            'string.min': 'You first name must have at least 3 letters',
            'string.empty': 'Your first name is a required field',
            'string.pattern.base': 'The input first name only supports letters'
        }),
        lastName: Joi.string().trim().min(2).pattern(new RegExp('[a-zA-Z]$')).required().messages({
            'string.min': 'You last name must have at least 3 letters',
            'string.empty': 'Your last name is a required field',
            'string.pattern.base': 'The input first name only supports letters'
        }),
        email: Joi.string().trim().required().email().messages({
            'string.empty': 'Your mail address is a required field',
        }),
        password: Joi.string().trim().min(6).required().pattern(new RegExp('[a-zA-Z0-9]{6,30}')).messages({
            'string.min': 'Your passwrod must contain at least 6 characters',
            'string.empty': 'Your password is a required field',
            'string.pattern.base': 'Your password must contain a letter and a number'
        }),
        userPic: Joi.string().trim().required().uri().messages({
            'string.uri': 'este URL no es valido',
            'string.empty': 'You should use a valid URL',
        }),
        country: Joi.string().required().messages({
            'string.empty': 'Please, choose a country',
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