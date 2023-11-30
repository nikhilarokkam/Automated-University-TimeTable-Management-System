var express = require('express');
var router = express.Router();
var router = require('express').Router();
var app = express();
module.exports = router;
var db = require('../db');
var username;
var password;

/* POST  submitLogin . */
        router.post("/submitLogin",function(request,response){
             username= request.body.username;
             password= request.body.password;
            if(username && password ){
            db.query('SELECT * FROM login WHERE username = ? AND password = ?', [username, password], function(err, results) {
        
                console.log("User Name id Type of "+ typeof(username)+ "And Password is Type of "+ typeof(username) );
                if(username == 'admin' && password == 'admin'){
                    console.log("Test Passed of Authentiacatoin");
                }else{
                    console.log("Test Failed Credential Not Matched ");
                }
                if (err){
                    throw err;
                } 
                if (results.length > 0) {
                    request.session.loggedin = true;
                    request.session.username = username;
                    response.redirect("/detailView");
                } else {
                    response.redirect("/roomlist");
                }			
                response.end();
               
              });
        }
        });
        

         /* GET Logout Method  . */
        router.get("/logout",function(req,res){
            req.session.destroy(function(err)
            { if(err)
                { 
                console.log(err); 
                } 
                else 
                { 
                res.redirect('/'); 
                } 
                }); 
               });

    
module.exports = router;   
    
