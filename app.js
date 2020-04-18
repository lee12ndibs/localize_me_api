require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('./jwt');
const errorHandler = require('./error_handler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// On active JWT pour gérer l'authentification
app.use(jwt());

// api routes
app.use('/users', require('./user_controller'));
app.get('/',(req, res)=>{
    res.json({Message : "Hello world!"})
})

// gestionnaire d'erreurs
app.use(errorHandler);

//Lancement du serveur
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 3000;
const server = app.listen(port, function () {
    console.log('Lancement du serveur au port : ' + port);
});