var mongoose = require('mongoose');

/*var modelSchema = mongoose.Schema({
    name: String,
    email: String,
    type: String
})*/

var modelSchema = mongoose.Schema({
    name: {
        type: String,
        minlength: [5, "El nombre es demasido corto: min 5 caracteres"],
        maxlength: [16, "El nombre es demasiado largo: max 15 caracteres"]
    },
    email: {
        type: String,
        required: [true, "El correo electrónico es obligatorio"],
        unique: true
    },
    type: {
        type: String,
        enum: ["Alumno", "Profesor"]
    }
});

var Zombie = mongoose.model("zombies", modelSchema)
module.exports = Zombie;