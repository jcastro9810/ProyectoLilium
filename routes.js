var usersController = require('./api/controladores/usersController.js').usersController
var productsController = require('./api/controladores/productsController.js').productsController
var cartController = require('./api/controladores/cartController.js').cartController


var validateSession = function(request, response, next) {
    if (request.session.rol == undefined) {
        response.json({ state: false, message: "Para hacer uso de esta funcionalidad, debe iniciar sesión" })
    } else {
        next()
    }
}

var validateRol = function(request, response, next) {
    if (request.session.rol != "admin") {
        response.json({ state: false, message: "Acceso restringido" })
    } else {
        next()
    }
}


app.post('/user/save', function(request, response) {
    usersController.save(request, response)
})
app.post('/user/show', function(request, response) {
    usersController.show(request, response)
})
app.post('/user/update', function(request, response) {
    usersController.update(request, response)
})
app.post('/user/delete', function(request, response) {
    usersController.delete(request, response)
})
app.post('/user/cargarId', function(request, response) {
    usersController.cargarId(request, response)
})
app.post('/user/login', function(request, response) {
    usersController.login(request, response)
})
app.post('/state', function(request, response) {
    response.json(request.session)
})
app.post('/user/logout', function(request, response) {
    request.session.destroy()
    response.json({ state: true, message: "Se ha cerrado la sesión, ¡Vuelve pronto!" })
})
app.post('/product/update', function(request, response) {
    productsController.update(request, response)
})
app.post('/product/show', function(request, response) {
    productsController.show(request, response)
})
app.post('/product/cargarId', function(request, response) {
    productsController.cargarId(request, response)
})
app.post('/cart/add', validateSession, function(request, response) {
    cartController.add(request, response)
})
app.post('/cart/show', function(request, response) {
    cartController.show(request, response)
})
app.post('/cart/cargarEmail', function(request, response) {
    cartController.cargarEmail(request, response)
})
app.post('/cart/update', function(request, response) {
    cartController.update(request, response)
})
app.post('/cart/delete', function(request, response) {
    cartController.delete(request, response)
})
app.post('/cart/cargarId', function(request, response) {
    cartController.cargarId(request, response)
})