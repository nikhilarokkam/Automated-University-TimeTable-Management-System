var express = require('express');
var router = express.Router();
var router = require('express').Router();
var app = express();
module.exports = router;
var db = require('../db');





//////////////// Subject Crud ////////////////


router.get("/subjectadd",function(req,res){
    if (req.session.loggedin) {
        var data;
      
        db.query('select * from subjects',function(error,result){
            if(error){
                throw error;
            }
                 data=result;
                res.render("subjectadd",{json:JSON.parse(JSON.stringify(data))});
        });
        }else{
            res.render("index");
        }
    });

    /////////////////Add Subject //////////////////////
    router.post("/addsubject",function(request,response){
        if (request.session.loggedin)
        { 
            db.query(
           "INSERT INTO subjects (id,title) VALUES ('"+request.body.id+"', '"+request.body.title+"')",function(err,result){
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
     response.redirect('subjectadd');
   });

   ///////////////////Delete//////////////
   
   router.get("/subjectdel/:id/",function(request,response){
    db.query(
            "DELETE FROM subjects WHERE id = '"+request.params.id+"'",function(err,result){
              if (err) {
                    response.send("Unable to do");
                    throw err;
                } else { // redirect to users list page
                    response.redirect("/subjectadd");
                } 
        }); 
    });
   
    ////////////Edit/Update///////////////////////
    
router.get('/subjectedit/:userId',function(req, res)  {
    if (req.session.loggedin)
    {
   
        var userId = req.params.userId;
         db.query('SELECT * FROM subjects WHERE id = ? ', [userId], function(err, results) {
         console.log(results[0]);
        if (err)throw err;
        res.render('subjectedit', {
            title : "Update Record",
            roomData : results[0]
        });
         
    });}else{
        res.render("index");
    }
    
});

router.post('/subjectupdate',function (req, res) {
    if (req.session.loggedin){    

    var sql = "update subjects SET id='"+req.body.subjectid+"',  title='"+req.body.subjecttitle+"' where id='"+req.body.id+"'"  ;
     var query = db.query(sql,function(err, results) {
      if(err) throw err;
      res.redirect('subjectadd');
    });}
    else
    {
        res.render("index");
    }
});



    
module.exports = router;   
    