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


let query = "insert into usuario(login,senha) values('alaba2020','delcio4040');";
connection.query(query, function(error,results,fields){
})
connection.end();