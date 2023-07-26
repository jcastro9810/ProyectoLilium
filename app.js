var express = require('express')
global.app = express()
var config = require('./config.js').config
var cors = require('cors')
const mongoose = require('mongoose')

app.all('*', function(request, response, next) {

    var url = request.headers.origin
    response.header('Access-Control-Allow-Origin', url);
    response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,HEAD');
    response.header('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    response.header("Access-Control-Allow-Credentials", "true");

    next()
})


app.use(cors({
    origin: function(origin, callback) {
        console.log(origin)

        if (!origin) return callback(null, true)
        if (config.listablanca.indexOf(origin) === -1) {
            return callback('error cors', false)
        }
        return callback(null, true)
    }
}))

mongoose.set('strictQuery', true)
mongoose.connect('mongodb://127.0.0.1:27017/' + config.bd, { useNewUrlParser: true, useUnifiedTopology: true }, (error, response) => {
    if (error) {
        console.log(error)
    } else {
        console.log('Conexión a Mongo correcta')
    }
})



var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


var session = require('express-session')({
    secret: config.keyWord,
    resave: true,
    saveUninitialized: true,
    cookie: {
        path: '/',
        httpOnly: true,
        maxAge: config.sesionTime
    },
    name: 'cookielili',
    rolling: true
})

app.use(session)


require('./routes.js')


app.listen(config.puerto, function() {
    console.log('servidor funcionando por el puerto ' + config.puerto)
})