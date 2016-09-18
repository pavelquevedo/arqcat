var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var formaSchema = new Schema({
	nombre: String,
	superficie: String
});

mongoose.model('forma',formaSchema);