var express = require('express');
var router = express.Router();
var router = require('express').Router();
var app = express();
module.exports = router;
var db = require('./db');


var faculty = require('./faculty/faculty'); 
var subject = require('./subject/subject'); 
var rooms = require('./rooms/rooms'); 
var period = require('./periods/period'); 
var enforce = require('./enforce/enforceValue'); 
var user = require('./user/user'); 
var genTimeTalbe = require('./timeTable/genTimeTable');
var timeTable = require('./timeTable/timeTable');
var login = require('./login/login');


 /* Importing all modules */
 router.use('/', faculty); 
 router.use('/', subject); 
 router.use('/', rooms); 
 router.use('/', period); 
 router.use('/', enforce); 
 router.use('/', user); 
 router.use('/',genTimeTalbe);
 router.use('/',timeTable);
 router.use('/',login);



/* GET home page. */
router.get("/",function(req,res){
    if (req.session.loggedin) {
		res.render("detailView");
	} else {
		res.render("index");
	}
	res.end();
    });


module.exports = router;   