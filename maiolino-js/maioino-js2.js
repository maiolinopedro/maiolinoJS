const mysql = require('mysql2');

const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password: '',
  port :3307,
  database : 'maiolino'  
});
connection.connect();

console.log("Conect!");


let query = "Select * from usuario;";
connection.query(query, function(error,results,fields){
})
connection.end();