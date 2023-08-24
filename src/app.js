const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
// hacemos un require de method-override
const methodOverride = require('method-override')

// requiriendo el enrutador
// entra por aca

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products')

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..','public')));

// el app.use de method tiene que sera antes de las rutas si no se rompe
app.use(methodOverride('_method'));

// aca es donde tenes que crear el app.use: todo lo que entra por /products que se vaya al enrutador 

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter)

// donde finalmente lo usas aca


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

// ver el kitechening2.0 para crear rutas vacias 1:41:00
