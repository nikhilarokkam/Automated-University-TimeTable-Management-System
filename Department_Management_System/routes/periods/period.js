var express = require('express');
var router = express.Router();
var router = require('express').Router();
var app = express();
module.exports = router;
var db = require('../db');



////////////////Period Crud//////////////////////////

router.get("/period",function(req,res){
    if (req.session.loggedin) {
        var data;
      
        db.query('select * from period',function(error,result){
            if(error){
                throw error;
            }
                 data=result;
                res.render("period",{json:JSON.parse(JSON.stringify(data))});
        });
        }else{
            res.render("index");
        }
    });
    
    //////////////ADD ///////////
    router.post("/periodAdd",function(request,response){
        if (request.session.loggedin)
        { 
          
            db.query(
           "INSERT INTO period (id, startTime, endTime)SELECT * FROM (SELECT '"+request.body.id+"','"+request.body.startTime+"','"+request.body.endTime+"') AS tmp WHERE NOT EXISTS (SELECT startTime FROM period WHERE startTime = '"+request.body.startTime+"') LIMIT 1",function(err,result){
             if (err) {
               if(err.code == "ER_DUP_ENTRY" ){
                   response.send("period")
                   console.log("Error Dupliacate");
               }else{
                    throw err;
               }
            }
            console.log("record inserted");
       }
       ); 
    
    }else{
        response.render("index");

    }
     response.redirect('period');
   });

   ///////////////////Delete//////////////
   
   router.get("/delperiod/:id/",function(request,response){
    db.query(
            "DELETE FROM period WHERE id =  '"+request.params.id+"'",function(err,result){
              if (err) {
                    response.send("Unable to do");
                    throw err;
                } else { // redirect to users list page
                    response.redirect("/period");
                } 
        }); 
    });
   
    ////////////////////EDIT/Update//////////////

    
router.get('/editperiod/:userId',function(req, res)  {
    if (req.session.loggedin)
    {
   
        var userId = req.params.userId;
         db.query('SELECT * FROM period WHERE id = ? ', [userId], function(err, results) {
         console.log(results[0]);
        if (err)throw err;
        res.render('periodEdit', {
            title : "Update Record",
            roomData : results[0]
        });
         
    });}else{
        res.render("period");
    }
    
});
 

router.post('/periodUpdate',function (req, res) {
    if (req.session.loggedin){    
    var sql = "update period SET id='"+req.body.periodid+"',  startTime='"+req.body.startTime+"',endTime='"+req.body.endTime+"'  where id ='"+req.body.id+"'";
     var query = db.query(sql,function(err, results) {
      if(err) throw err;
      res.redirect('period');
    });}
    else
    {
        res.render("index");
    }
});
    
module.exports = router;   
    
