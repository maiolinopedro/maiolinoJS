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


let query = "update usuario set senha = 'albaalba' where codigo =3;";
connection.query(query, function(error,results,fields){
})
connection.end();