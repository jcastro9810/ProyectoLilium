var cartModel = require('../modelos/cartModel.js').cartModel;

var cartController = {};

cartController.add = function(request, response) {
    var post = {
        product: request.body.product,
        price: request.body.price,
        quantity: request.body.quantity,
        email: request.body.email,
        adress: request.body.adress
    }

    cartModel.add(post, function(result) {
        if (result.state == true) {
            response.json({ state: true, message: '¡Producto pedido! tienes dos días hábiles para cancelar la orden, vía email, sólo se aceptan pagos contra entrega.' })
        } else {
            response.json({ state: false, message: 'Se presentó un error' })
        }
    })

}

cartController.show = function(request, response) {
    cartModel.show(null, function(data) {
        if (data.state == false) {
            response.json({ state: false, message: 'Se presentó un error al cargar' });
        } else {
            response.json({ data });
        }
    });
};

cartController.cargarEmail = function(request, response) {

    var post = {
        email: request.body.email
    }

    cartModel.cargarEmail(post, function(data) {
        if (data.state == false) {
            response.json({ state: false, message: 'Se presentó un error al cargar' })
        } else {
            response.json(data)
        }
    })
}

cartController.delete = function(request, response) {
    var post = {
        id: request.body.id,
    }

    if (post.id == undefined || post.id.trim() == "" || post.id == null) {
        response.json({ state: false, message: "El campo ID es obligatorio" })
        return false
    }

    cartModel.delete(post, function(confirmation) {
        if (confirmation.state == false) {
            response.json({ state: false, message: 'Error al eliminar' })
        } else {
            response.json({ state: true, message: '¡Producto eliminado con éxito!' })
        }
    })
}

cartController.update = function(request, response) {
    var post = {
        id: request.body.id,
        estado: request.body.estado
    };

    if (post.id == undefined || post.id.trim() == "" || post.id == null) {
        response.json({ state: false, message: "El campo ID es obligatorio" });
        return false;
    }

    if (post.estado == undefined || post.estado.trim() == "" || post.estado == null) {
        response.json({ state: false, message: "El campo Estado es obligatorio" });
        return false;
    }

    cartModel.update(post, function(confirmation) {
        if (confirmation.state == false) {
            response.json({ state: false, message: 'Error al actualizar' });
        } else {
            response.json({ state: true, message: '¡Producto actualizado con éxito!' });
        }
    });
};

cartController.cargarId = function(request, response) {

    var post = {
        id: request.body.id
    }

    if (post.id == undefined || post.id.trim() == "" || post.id == null) {
        response.json({ state: false, message: "El campo ID es obligatorio" })
        return false
    }

    cartModel.cargarId(post, function(data) {
        if (data.state == false) {
            response.json({ state: false, message: 'Se presentó un error al cargar' })
        } else {
            response.json(data)
        }
    })
}







module.exports.cartController = cartController;