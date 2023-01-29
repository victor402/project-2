var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// connect to the database with Mongoose
//basically this helps connect database with mongoose
//it help to connect to mangoDb at the localhost.
require('./config/database');

//it comes before indexRouter because you have to make sure the database is loaded before any code is run.

var indexRouter = require('./routes/index');

var restaurantsRouter = require('./routes/restaurants');

var reservationsRouter = require('./routes/reservations');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use('/restaurants', restaurantsRouter);
app.use('/', reservationsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
