var cartModel = {}

const mongoose = require('mongoose')
const Schema = mongoose.Schema

var cartSchema = new Schema({
    product: String,
    price: String,
    quantity: String,
    adress: String,
    email: String,
    estado: String
})

const myModel = mongoose.model('cart', cartSchema)

cartModel.add = function(post, callback) {
    const instancia = new myModel
    instancia.product = post.product
    instancia.price = post.price
    instancia.quantity = post.quantity
    instancia.email = post.email
    instancia.adress = post.adress
    instancia.estado = 'Pendiente'


    instancia.save((error, saved) => {
        if (error) {
            console.log(error)
            return callback({ state: false })
        } else {
            return callback({ state: true })
        }
    })
}

cartModel.show = function(post, callback) {
    myModel.find({}, { product: 1, price: 1, quantity: 1, email: 1, adress: 1, estado: 1 }, (error, data) => {
        if (error) {
            console.log(error)
            return callback({ state: false })
        } else {
            return callback({ state: true, datos: data })
        }
    })
}

cartModel.cargarEmail = function(post, callback) {
    myModel.find({ email: post.email }, { produc: 1, price: 1, email: 1, quantity: 1, adress: 1 }, (error, data) => {
        if (error) {
            console.log(error)
            return callback({ state: false })
        } else {
            return callback({ state: true, datos: data })
        }
    })
}

cartModel.delete = function(post, callback) {
    myModel.findByIdAndDelete(post.id, (error, confirmation) => {
        if (error) {
            console.log(error)
            return callback({ state: false })
        } else {
            return callback({ state: true })
        }
    })
}

cartModel.update = function(post, callback) {
    myModel.findByIdAndUpdate(post.id, { estado: post.estado }, (error, confirmation) => {
        if (error) {
            console.log(error)
            return callback({ state: false })
        } else {
            return callback({ state: true })
        }
    })
}

cartModel.cargarId = function(post, callback) {
    myModel.find({ _id: post.id }, { produc: 1, price: 1, email: 1, quantity: 1, adress: 1, estado: 1 }, (error, data) => {
        if (error) {
            console.log(error)
            return callback({ state: false })
        } else {
            return callback({ state: true, datos: data })
        }
    })
}




module.exports.cartModel = cartModel