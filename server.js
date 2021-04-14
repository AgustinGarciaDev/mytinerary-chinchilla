const express = require('express')

const app = express()

 app.use('/api', (req, res) => {
    
    console.log(req)
    res.send("Bienvenido a mi web")
}) 


app.listen(5000, () => console.log("Estoy escuchando"))