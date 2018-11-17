//heroku app info : https://agile-harbor-50928.herokuapp.com/ | https://git.heroku.com/agile-harbor-50928.git
//heroku stuff
const PORT = (process.env.PORT == null || process.env.PORT == "") ? 8080 : process.env.PORT;
console.log(`app started! PORT ${PORT}`);

const http = require('http');
const fs = require('fs');

http.createServer( (req,res) => 
{
    res.writeHead(200, {'Content-Type': 'text/html'});

    res.write("PORN! WHY ARE YOU WATCHING PORN!!!");
    
    fs.readFile("<br>test_file_reading.txt", (err,data) =>
    {
        if (err) return console.log(err);
        res.write(data);
    });

    // fs.readFile("views/index.html", (err, data) => 
    // {
    //     if (err) return console.log(err);
    //     res.write(data);
    // });
}).listen(PORT);

//example database code (used on shane's labtop. example query below)
// let mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "shanemay",
//   database: "HotelDB"
// });

// con.connect( (err) => {
//     //testing connection to database
//     if (err) return console.log(err);
//     console.log("Connected to DB!");
//     //test query of database
//     con.query("SELECT * FROM Hotel;", (err,result,fields) => 
//     {
//         if (err) return console.log(err);
//         console.log(result);
//     });
// });