var express = require('express');
var router = express.Router();
var router = require('express').Router();
var app = express();
module.exports = router;
var db = require('../db');

/* GET Generte View  . */
router.get("/generateTable",function(request,response){
    if (request.session.loggedin) {
        var data;
       db.query('select roomId from rooms',function(error,result){
           if(error){
               throw error;
           }
           console.log(result);
           data=result;
           response.render("generate",{semister:JSON.parse(JSON.stringify(data))});
       });
      
   } else {
       response.render("index");
   }
 });
 module.exports = router;   