var productsModel = {}

const mongoose = require('mongoose')
const Schema = mongoose.Schema

var productsSchema = new Schema({
    product: String,
    price: String,
    quantity: String
})

const myModel = mongoose.model('products', productsSchema)

productsModel.show = function(post, callback) {
    myModel.find({}, { _id: 1, product: 1, price: 1, quantity: 1, image: 1, category: 1 }, (error, data) => {
        if (error) {
            console.log(error)
            return callback({ state: false })
        } else {
            return callback({ state: true, datos: data })
        }
    })
}

productsModel.update = function(post, callback) {
    myModel.findByIdAndUpdate(post.id, { quantity: post.quantity }, (error, confirmation) => {
        if (error) {
            console.log(error)
            return callback({ state: false })
        } else {
            return callback({ state: true })
        }
    })
}

productsModel.cargarId = function(post, callback) {
    myModel.find({ _id: post.id }, { _id: 1, quantity: 1, product: 1, price: 1 }, (error, data) => {
        if (error) {
            console.log(error)
            return callback({ state: false })
        } else {
            return callback({ state: true, datos: data })
        }
    })
}

module.exports.productsModel = productsModel