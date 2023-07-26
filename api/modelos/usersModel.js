var usersModel = {}

const mongoose = require('mongoose')
const Schema = mongoose.Schema

var usersSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    password: String,
    rol: String,
    adress: String

})

const myModel = mongoose.model('users', usersSchema)

usersModel.validateEmail = function(post, callback) {
    myModel.find({ email: post.email }, { name: 1, _id: 0 }, (error, document) => {
        if (error) {
            console.log(error)
            return callback({ state: false })
        } else {
            if (document.length == 0) {
                return callback({ state: true })
            } else {
                return callback({ state: false })
            }
        }
    })
}

usersModel.save = function(post, callback) {
    const instancia = new myModel
    instancia.name = post.name
    instancia.email = post.email
    instancia.phone = post.phone
    instancia.password = post.password
    instancia.adress = post.adress
    instancia.rol = 'client'

    instancia.save((error, saved) => {
        if (error) {
            console.log(error)
            return callback({ state: false })
        } else {
            return callback({ state: true })
        }
    })
}

usersModel.show = function(post, callback) {
    myModel.find({}, { _id: 1, name: 1, email: 1, phone: 1, rol: 1, adress: 1 }, (error, data) => {
        if (error) {
            console.log(error)
            return callback({ state: false })
        } else {
            return callback({ state: true, datos: data })
        }
    })
}

usersModel.update = function(post, callback) {
    myModel.findByIdAndUpdate(post.id, { email: post.email, name: post.name, phone: post.phone, rol: post.rol, adress: post.adress }, (error, confirmation) => {
        if (error) {
            console.log(error)
            return callback({ state: false })
        } else {
            return callback({ state: true })
        }
    })
}

usersModel.delete = function(post, callback) {
    myModel.findByIdAndDelete(post.id, (error, confirmation) => {
        if (error) {
            console.log(error)
            return callback({ state: false })
        } else {
            return callback({ state: true })
        }
    })
}

usersModel.cargarId = function(post, callback) {
    myModel.find({ _id: post.id }, { name: 1, email: 1, phone: 1, rol: 1, adress: 1 }, (error, data) => {
        if (error) {
            console.log(error)
            return callback({ state: false })
        } else {
            return callback({ state: true, datos: data })
        }
    })
}

usersModel.login = function(post, callback) {
    myModel.find({ email: post.email, password: post.password }, { name: 1, email: 1, phone: 1, rol: 1, _id: 1, adress: 1, password: 1 }, (error, data) => {
        if (error) {
            console.log(error)
            return callback({ state: false, datos: [] })
        } else {
            return callback({ state: true, datos: data })
        }
    })
}



module.exports.usersModel = usersModel