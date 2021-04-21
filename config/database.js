const mongoose = require('mongoose')

//Parcear referie a leer los datos que le vienen

mongoose.connect( process.env.MONGO_URI, {

    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false

})
    .then(() => console.log("Conectada con exito"))
    .catch(error => console.log(error, "estamos teniendo un error"))
    
 //Exportamos nuestra base de pasos para que apenas levante el servidor se ejecute   