const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');

//Creando el servidor
const app = express();

//Habilitar cors
app.use(cors()); // cualquiera puede entrar a mi API

/*const whiteList = ['http:localhost:4200'];
const corsOption = {
    origin: (origin, callback) => {
        const existe = whiteList.some( dominio => dominio == origin );
        if(existe){
            callback(null, true);
        }else{
            callback(new Error('No permitido por cors'))
        }
    }
}*/ //Limitar a solo url a que tengan acceso a la api

//Conectar a mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

//Habilitar el body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Habilitar routing 
app.use('/', routes());

//puerto y arrcancar el servidor
app.listen(4000, () => {
    console.log('Servidor funcionando');
});