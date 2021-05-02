const passport = require('passport')
const jwtStrategy = require('passport-jwt').Strategy
const extractJwt = require('passport-jwt').ExtractJwt
const Usuario = require('../models/User')

//Estrategia de passport JSON WEB TOKEN
module.exports = passport.use(new jwtStrategy({
    jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_OR_KEY
}, (payload, done) => {
    Usuario.findById(payload._doc._id)
        .then(user => {
            if (!user) {
                return done(null, false)
            } else {
                return done(null, user)
            }
        })
        .catch(error => {
            return done(error, false)
        })
}
))