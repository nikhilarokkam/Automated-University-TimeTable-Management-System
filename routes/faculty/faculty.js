var express = require('express');
var router = express.Router();
var router = require('express').Router();
var app = express();
module.exports = router;
var db = require('../db');


router.get("/facultyView",function(req,res){
    if (req.session.loggedin) {
        var data;
      
        db.query('select * from faculty',function(error,result){
            if(error){
                throw error;
            }
                 data=result;
                res.render("facultyView",{json:JSON.parse(JSON.stringify(data))});
        });
        }else{
            res.render("index");
        }
    });

    


 /* CRUD FOR  FACULTIES */
    /* Add */

    router.post("/addFaculty",function(request,response){
        if (request.session.loggedin)
        { 
            db.query(
           "INSERT INTO faculty (id, name) VALUES ('"+request.body.facultyId+"', '"+request.body.fName+"')",function(err,result){
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
     response.redirect('facultyView');
   });

   

 /* Delete */
   router.get("/delfaculty/:id",function(req,res){
    if (req.session.loggedin)
    {
       var del =req.params.id;

       db.query(
        "DELETE FROM faculty WHERE id =  '"+req.params.id+"'",function(err,result){
          if (err) {
                res.send("Unable to do");
                throw err;
            } else { // redirect to users list page
                res.redirect("/facultyView");
            } 
    
        }); 

    }else
    {
    res.render("index");}
   });
    


     /* Edit & Delete */

    
router.get('/editFaculty/:userId',function(req, res)  {
    if (req.session.loggedin)
    {
   
        var userId = req.params.userId;
         db.query('SELECT * FROM faculty WHERE id = ? ', [userId], function(err, results) {
         console.log(results[0]);
        if (err)throw err;
        res.render('faculty_edit', {
            title : "Update Record",
            roomData : results[0]
        });
         
    });}else{
        res.render("index");
    }
    
});

router.post('/updateFac',function (req, res) {
    if (req.session.loggedin){    
    var sql = "update faculty SET id='"+req.body.facultyid+"',  name='"+req.body.facultyName+"'  where id ="+req.body.id;
     var query = db.query(sql,function(err, results) {
      if(err) throw err;
      res.redirect('facultyView');
    });}
    else
    {
        res.render("index");
    }
});

    
module.exports = router;   
    