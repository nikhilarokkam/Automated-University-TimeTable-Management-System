var express = require('express');
var router = express.Router();
var router = require('express').Router();
var app = express();
module.exports = router;
var db = require('../db');

  /* GET RoomList View . */
            router.get("/roomlist",function(req,res){
                    if (req.session.loggedin) {
                        var data;
                        db.query('select * from rooms',function(error,result){
                            if(error){
                                throw error;
                            }
                                 data=result;
                                res.render("roomlist",{json:JSON.parse(JSON.stringify(data))});
                        });
                        }else{
                            res.render("index");
                        }
                });
        
                         
    
                                ////////////// /* GET Delete Method  . *////////////////
    router.get("/delroom/:id/",function(request,response){
        db.query(
                "DELETE FROM rooms WHERE roomId =  '"+request.params.id+"'",function(err,result){
                  if (err) {
                        response.send("Unable to do");
                        throw err;
                    } else { // redirect to users list page
                        response.redirect("/roomlist");
                    } 
            }); 
        });
        ////////////// /* Post Add Method  . *////////////////
 router.post("/addRoom",function(request,response){
     console.log("hello");
     var room = request;
    var roomName = room.body.roomName;
    var roomDept = room.body.roomDept;
    var roomCapacity = room.body.roomCapacity;
    db.query(
        "INSERT INTO rooms (roomid, roomDept,capacity) VALUES ('"+roomName+"', '"+roomDept+"','"+roomCapacity+"')",function(err,result){
          if (err) {
            if(err.code == "ER_DUP_ENTRY" ){
                console.log("Error Dupliacate");
            }else{
                 throw err;
            }
           
        }
        console.log("record inserted");
    });
    response.redirect('/roomlist');
});

  ////////////// /* GET Edit Method  . *////////////////
router.get('/roomedit/:userId',function(req, res)  {
    if (req.session.loggedin) {
    var userId = req.params.userId;
    db.query('SELECT * FROM rooms WHERE roomId = ? ', [userId], function(err, results) {
         console.log(results[0]);
        if (err)throw err;
        res.render('room_edit', {
            title : "Update Record",
            roomData : results[0]
        });
         
    });}
    else{
        res.render("index");
    }
});

  ////////////// /* GET Update Method  . *////////////////
router.post('/update',function (req, res) {
    
    console.log(req.body.roomDept);
    var sql = "update rooms SET roomId='"+req.body.roomid+"',  roomDept='"+req.body.roomDept+"',  capacity='"+req.body.capacity+"' where roomId ='"+req.body.id+"'";
     var query = db.query(sql,function(err, results) {
      if(err) throw err;
      res.redirect('/roomlist');
    });
});


    
module.exports = router;   
    