var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//Mongoose
var mongoose = require('mongoose');


var routes = require('./routes/index');
var users = require('./routes/users');

require('./models/Sitio');

var sitioController = require('./controllers/Sitio');

//Connect to database
mongoose.connect('mongodb://127.0.0.1:27017/arqcat');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

//Sitios
app.get('/sitios',sitioController.index);
app.get('/sitios/crear',sitioController.createView);
app.post('/sitios/crear',sitioController.create);
app.get('/sitios/actualizar/:id',sitioController.updateView);
app.post('/sitios/actualizar',sitioController.update);
app.post('/sitios/eliminar/:id', sitioController.delete);

//Pastas
//app.get('/pasta/crear');

//Formas

//Vajillas


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
