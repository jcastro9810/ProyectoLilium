var productsModel = require('../modelos/productsModel.js').productsModel;

var productsController = {};

productsController.show = function(request, response) {
    productsModel.show(null, function(data) {
        if (data.state == false) {
            response.json({ state: false, message: 'Se presentó un error al cargar' });
        } else {
            response.json({ data });
        }
    });
};

productsController.update = function(request, response) {
    var post = {
        id: request.body.id,
        quantity: request.body.quantity
    };

    if (post.id == undefined || post.id.trim() == "" || post.id == null) {
        response.json({ state: false, message: "El campo ID es obligatorio" });
        return false;
    }

    if (post.quantity == undefined || post.quantity.trim() == "" || post.quantity == null) {
        response.json({ state: false, message: "El campo Cantidad es obligatorio" });
        return false;
    }

    productsModel.update(post, function(confirmation) {
        if (confirmation.state == false) {
            response.json({ state: false, message: 'Error al actualizar' });
        } else {
            response.json({ state: true, message: '¡Producto actualizado con éxito!' });
        }
    });
};

productsController.cargarId = function(request, response) {

    var post = {
        id: request.body.id
    }

    if (post.id == undefined || post.id.trim() == "" || post.id == null) {
        response.json({ state: false, message: "El campo ID es obligatorio" })
        return false
    }

    productsModel.cargarId(post, function(data) {
        if (data.state == false) {
            response.json({ state: false, message: 'Se presentó un error al cargar' })
        } else {
            response.json(data)
        }
    })
}


module.exports.productsController = productsController;