require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes/index')
require('./config/passport')
require('./config/database')

const app = express()

app.use(cors())

app.use(express.json())

app.use('/api', router)

app.listen(4000, () => console.log("Estoy escuchando"))