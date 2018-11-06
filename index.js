console.log("app started");

const http = require('http');
const fs = require('fs');

http.createServer( (req,res) => 
{
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    fs.readFile("views/index.html", (err, data) => 
    {
        if (err) return console.log(err);
        res.write(data);
    });
}).listen(8080);

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "shanemay",
  database: "HotelDB"
});

con.connect( (err) => {
    //testing connection to database
  if (err) return console.log(err);
  console.log("Connected to DB!");
    //test query of database
    con.query("SELECT * FROM Hotel;", (err,result,fields) => 
    {
        if (err) return console.log(err);
        console.log(result);
        console.log(fields);
    });

});