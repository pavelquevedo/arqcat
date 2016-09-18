var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sitioSchema = new Schema({
	nombre: String,
	ubicacion: String
});

mongoose.model('sitio',sitioSchema);