var express = require('express');
var router = express.Router();
var router = require('express').Router();
var app = express();
module.exports = router;
var db = require('../db');

   
    

/* TimeTable Generation Method   . */
router.post("/createTable/",function(request,response){
    if (request.session.loggedin) {
        var data;
        var semisterTable = request.body.semister;
        db.query('select * from Days;select * from assignedData;select * from period',function(error,result){
           if(error){
               throw error;
           }
           console.log(result);
           data=result;
           console.log("Current Semister " + semisterTable);
           response.render("result",{data:{tableData:JSON.parse(JSON.stringify(data)),currentSemister:semisterTable}});
       });
    // response.send("result " + request.body.semister);
      
   } else {
       response.render("index");
   }
 });
 
 router.get("/detailView",function(req,res){
    if (req.session.loggedin) {

        var data;
        db.query('SELECT (select COUNT(*)   FROM rooms  ) AS totalRooms,( select COUNT(*)    FROM period) AS totalPeriods ,(select COUNT(*)    FROM subjects) AS totalSubjects,(select COUNT(*)    FROM faculty) AS totalFaculty',function(error,result){
            if(error){
                throw error;
            }
                 data=result;
                 console.log(JSON.parse(JSON.stringify(data[0])));
                res.render("detailView",{totalrooms:JSON.parse(JSON.stringify(data))});
        });
    }else{
        res.render("index");
        console.log(err);
    }
    });

    
 module.exports = router;