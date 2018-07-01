var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();
var port = 3000;
const fetch = require('node-fetch');
const {Observable, of, from} = require('rxjs');
const {map} = require('rxjs/operators');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.set('x-powered-by', false);
app.set('strict routing', true);
app.enable('case sensitive routing');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.get('/users', async function(req, res){
  // promise
// fetch('http://jsonplaceholder.typicode.com/users/')
//   .then(res => res.json())
//   .then(json => res.send(json));

// observables
// from(fetch('http://jsonplaceholder.typicode.com/users/').then(res => res.json()))
// .subscribe((json)=> res.send(json));

// async/await

const res1 = await fetch('http://jsonplaceholder.typicode.com/users/');
const json = await res1.json();
res.send(json);
})

module.exports = app;


app.listen(port, () => console.log("listening 3000 ..."));
