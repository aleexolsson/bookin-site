var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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



const api_url = 'https://api.kolada.se/v2/';

async function getapi(url) {



const response = await fetch('https://api.kolada.se/v2/');

var data = await response.json();
console.log(data);
if (response) {
  hideloader();
}
show(data);

}

getapi(api_url);

function hideloader() {
  document.getElementById("testing");

}
function show(data) {
  let tab = 
`<tr>
    <th>Name</th>
    <th>Office</th>
    <th>test 3</th>
    <th>test 4</th>

  </tr>`

  for (let r of data.list) {
    tab += `<tr> 
<td>${r.name} </td>
<td>${r.office}</td>
<td>${r.position}</td> 
<td>${r.salary}</td>          
</tr>`;
}
document.getElementById("testning-2").innerhtml = tab;
}

function showIFrame() {
  document.querySelector("iframe").style.display = "block";
  document.getElementById("firstDialog").style.display = "block";

}

let button = document.getElementsById("showDialog");

function first(){
  document.getElementById("firstDialog").style.display = "block";
}
