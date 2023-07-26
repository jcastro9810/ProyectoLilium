var usersModel = require('../modelos/usersModel.js').usersModel

var usersController = {}




usersController.save = function(request, response) {
    var post = {
        name: request.body.name,
        email: request.body.email,
        phone: request.body.phone,
        password: request.body.password,
        adress: request.body.adress,
        rol: request.body.rol
    }

    if (post.name == undefined || post.name.trim() == "" || post.name == null) {
        response.json({ state: false, message: "El campo Nombre es obligatorio" })
        return false
    }

    if (post.email == undefined || post.email.trim() == "" || post.email == null) {
        response.json({ state: false, message: "El campo Correo es obligatorio" })
        return false
    }

    if (post.phone == undefined || post.phone == null || post.phone.trim() == "") {
        response.json({ state: false, message: "El campo Teléfono es obligatorio" })
        return false
    }

    if (post.password == undefined || post.password.trim() == "" || post.password == null) {
        response.json({ state: false, message: "El campo Contraseña es obligatorio" })
        return false
    }

    if (post.adress == undefined || post.adress.trim() == "" || post.adress == null) {
        response.json({ state: false, message: "El campo Dirección es obligatorio" })
        return false
    }

    usersModel.validateEmail(post, function(exists) {
        if (exists.state == false) {
            response.json({ state: false, message: 'Correo electrónico en uso, intente con otro' })
        } else {
            usersModel.save(post, function(result) {
                if (result.state == true) {
                    response.json({ state: true, message: '¡Usuario almacenado con éxito!' })
                } else {
                    response.json({ state: false, message: 'Se presentó un error al cargar' })
                }
            })

        }
    })


}

usersController.show = function(request, response) {
    usersModel.show(null, function(data) {
        if (data.state == false) {
            response.json({ state: false, message: 'Se presentó un error al cargar' })
        } else {
            response.json({ data })
        }
    })
}

usersController.update = function(request, response) {
    var post = {
        name: request.body.name,
        email: request.body.email,
        phone: request.body.phone,
        id: request.body.id,
        adress: request.body.adress,
        rol: request.body.rol
    }

    if (post.name == undefined || post.name.trim() == "" || post.name == null) {
        response.json({ state: false, message: "El campo Nombre es obligatorio" })
        return false
    }

    if (post.email == undefined || post.email.trim() == "" || post.email == null) {
        response.json({ state: false, message: "El campo Correo es obligatorio" })
        return false
    }

    if (post.phone == undefined || post.phone.trim() == "" || post.phone == null) {
        response.json({ state: false, message: "El campo Teléfono es obligatorio" })
        return false
    }

    if (post.id == undefined || post.id.trim() == "" || post.id == null) {
        response.json({ state: false, message: "El campo ID es obligatorio" })
        return false
    }

    if (post.rol == undefined || post.rol.trim() == "" || post.rol == null) {
        response.json({ state: false, message: "Por favor defina el rol del usuario" })
        return false
    }
    if (post.adress == undefined || post.adress.trim() == "" || post.adress == null) {
        response.json({ state: false, message: "El campo Dirección es obligatorio" })
        return false
    }


    usersModel.update(post, function(confirmation) {
        if (confirmation.state == false) {
            response.json({ state: false, message: 'Error al actualizar' })
        } else {
            response.json({ state: true, message: '¡Usuario actualizado con éxito!' })
        }
    })
}

usersController.delete = function(request, response) {
    var post = {
        id: request.body.id
    }

    if (post.id == undefined || post.id.trim() == "" || post.id == null) {
        response.json({ state: false, message: "El campo ID es obligatorio" })
        return false
    }

    usersModel.delete(post, function(confirmation) {
        if (confirmation.state == false) {
            response.json({ state: false, message: 'Error al eliminar' })
        } else {
            response.json({ state: true, message: '¡Usuario eliminado con éxito!' })
        }
    })

}

usersController.cargarId = function(request, response) {

    var post = {
        id: request.body.id
    }

    if (post.id == undefined || post.id.trim() == "" || post.id == null) {
        response.json({ state: false, message: "El campo ID es obligatorio" })
        return false
    }

    usersModel.cargarId(post, function(data) {
        if (data.state == false) {
            response.json({ state: false, message: 'Se presentó un error al cargar' })
        } else {
            response.json(data)
        }
    })
}

usersController.login = function(request, response) {

    var post = {
        email: request.body.email,
        password: request.body.password
    }

    if (post.email == undefined || post.email.trim() == "" || post.email == null) {
        response.json({ state: false, message: "El correo es obligatorio" })
        return false
    }

    if (post.password == undefined || post.password.trim() == "" || post.password == null) {
        response.json({ state: false, message: "Por favor, introduzca la contraseña" })
        return false
    }

    usersModel.login(post, function(data) {
        if (data.state == false) {
            response.json({ state: false, message: 'Se presentó un error' })
        } else {
            if (data.datos.length == 0) {
                response.json({ state: false, message: 'Correo o contraseña incorrectos' })
            } else {
                console.log(data.datos[0])
                request.session.name = data.datos[0].name
                request.session.email = data.datos[0].email
                request.session.phone = data.datos[0].phone
                request.session.rol = data.datos[0].rol
                request.session.adress = data.datos[0].adress
                response.json({ state: true, mensaje: '¡Hola, ' + data.datos[0].name + '!' })
            }

        }
    })
}






module.exports.usersController = usersController