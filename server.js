require ('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes/index')


require('./config/database')

const app = express()

app.use(cors())

app.use(express.json())

app.use('/api' , router)

app.listen(5000, () => console.log("Estoy escuchando"))