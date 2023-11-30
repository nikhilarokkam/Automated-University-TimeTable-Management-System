var express = require('express');
var router = express.Router();
var router = require('express').Router();
var app = express();
module.exports = router;
var db = require('../db');



/* Get Enforce View */
router.get("/enfValue",function(req,res){
    if (req.session.loggedin) {
        var data;
        db.query('select *   from faculty ; select * from subjects;select * from rooms ; select * from period ; select * from assignedData ; select * from semesters;select * from days;',function(error,result){
            if(error){
                throw error;
            }
             
            console.log(result);
            // console.log(result[2]);
                 data=result;
                res.render("enfValue",{faculty:JSON.parse(JSON.stringify(data))});
        });
       
        }else{
            res.render("index");
        }
    });

    /* Insert Data */

router.post("/submitEnfValue",function(request,response){
if (request.session.loggedin)
{ 
db.query(
    "INSERT INTO assignedData (faculty,subject,classroom,period,semister,dayId) VALUES ('"+request.body.faculty+"', '"+request.body.subject+"','"+request.body.classRoom+"','"+request.body.period+"','"+request.body.semister+"','"+request.body.days+"'  )",function(err,result){
      if (err) {
        if(err.code == "ER_DUP_ENTRY" ){
            console.log("Error Dupliacate");
        }else{
             throw err;
        }
     }
     console.log("record inserted");
}); 

}else{
 res.render("index");

}
response.redirect('enfValue');
});

//////////////////Delete////////////////////

router.get("/delenf/:faculty/:period",function(request,response){

db.query(
    'DELETE FROM assignedData WHERE faculty = ? AND period = ?'  ,[request.params.faculty,request.params.period], function(err,result){
        if (err) {
            response.send("Unable to do");
            throw err;
        } else { // redirect to users list page
            response.redirect("/enfValue");
        } 
}); 
});

    
module.exports = router;   
    
