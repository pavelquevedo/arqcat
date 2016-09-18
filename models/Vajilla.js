var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var vajillaSchema = new Schema({
	nombre: String,
	sitio: {type:Schema.Types.ObjectId, ref:"sitio"},
	pasta: {type:Schema.Types.ObjectId, ref:"pasta"},
	forma: {type:Schema.Types.ObjectId, ref:"forma"}
});

mongoose.model('vajilla',vajillaSchema);