var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pastaSchema = new Schema({
	nombre: String,
	colores: [{color:String}],
	agregados: [{agregado:String}]
});

mongoose.model('pasta',pastaSchema);