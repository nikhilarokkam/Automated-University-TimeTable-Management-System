var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'project',
  multipleStatements: true

});

connection.connect((err)=>{
  if(!err)
  {
    console.log("connected");
  }else{
    console.log("Connection Failed");
  }

});
module.exports = connection;