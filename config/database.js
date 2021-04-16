const mongoose = require('mongoose')

//Parcear referie a leer los datos que le vienen

mongoose.connect( 'mongodb+srv://agustin:data2020@cluster0.yms8y.mongodb.net/mytinerary?retryWrites=true&w=majority', {

    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false

})
    .then(() => console.log("Conectada con exito") )
    .catch(error => console.log(error))
    
 //Exportamos nuestra base de pasos para que apenas levante el servidor se ejecute   