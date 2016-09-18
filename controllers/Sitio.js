var mongoose = require('mongoose'),
	Sitio = mongoose.model('sitio'),
	controller = {};

controller.index = [
	function(req,res,next){
		Sitio.find({},function(err,sitios){
			if(err) return next(err);
			res.render('sitio/index',{sitios:sitios});
		});
	}
];
controller.createView = [
	function(req,res,next){
		res.render('sitio/create');
	}
];
controller.create = [
	function(req,res,next){
		if("nombre" in req.body && req.body.name !== ''){
			next();
		}else{
			res.send(400);
		}
	},
	function(req,res,next){
		Sitio.create(req.body,function(err,sitio){
			if(err) return next(err);
			res.redirect('/sitios');
		});
	}
];
controller.updateView = [
	function(req,res,next){
		Sitio.findById(req.param('id'),function(err,sitio){
			if(err) return next(err);
			if(!sitio){
				res.send(404);
			}else{
				res.render('sitio/edit',{sitio:sitio});
			}
		});
	}
];
controller.update = [
	function(req,res,next){
		Sitio.findById(req.body.id,function(err,sitio){
			if(err) return next(err);

			sitio.nombre = req.body.nombre;
			sitio.ubicacion = req.body.ubicacion;
			//Guardar cambios
			sitio.save(function(err,sitio){
				if(err) return next(err);
				res.redirect('/sitios');
			});
		});		
	}
];

controller.delete = [
	function(req,res,next){
		console.log('entró a delete'+ req.param('id'));
		Sitio.remove({ _id: req.param('id') }, function(err){

			if(err) return next(err);
			res.redirect('/sitios');
		});
	}
];

module.exports = controller;