var mongoose = require('mongoose');

var modelSchema = mongoose.Schema({
    username: {
        type: String,
        minlength: [5, "El nombre es demasiado corto: min 5 caracteres"],
        maxlength: [15, "El sabor es demasiado largo: max 15 caracteres"]
    },
    password: {
        type: String
    },
    email: {
        type: String,
        required: [true, "El correo electrónico es obligatorio"]
    }
})

var Usuario = mongoose.model("Usuarios", modelSchema)
module.exports = Usuario;