var express = require('express');
var app = express();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var main = require('./routes/render'); 

			
//set view engine
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
	res.render('index');
  });
  
  app.get('/login', function(req, res) {
	res.render('login');
  });
  
  app.post('/login', function(req, res) {
	const username = req.body.username;
	const password = req.body.password;
	// Check username and password against database or other authentication method
	// If authenticated, redirect to the user's dashboard or homepage
	// Otherwise, return an error message
  });

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.use('/', main); 

app.listen(3000,function(){
    console.log("Everything is fine");
});

