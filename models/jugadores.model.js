const mongoose = require('mongoose');
const { Schema } = mongoose;

const JugadorSchema = new Schema({
    nombre: {type : String, required:true},
    equipo: {type : String, required:true},
    dorsal: {type : Number, required:true},
    salario: {type : Number, required:true},
    patrocinio: {type : String, required:true}
});

module.exports = mongoose.model('jugadores', JugadorSchema);