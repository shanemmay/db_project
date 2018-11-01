const express = require("express");
const app = express();
const port = 8080;

const fs = require('fs');
var path=require('path');
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

//can access any file by using rout /file/file_name
app.use('/file', express.static(path.join(__dirname, 'views')) );

app.get('/path', (req,res) => 
{
    res.write("<h1>App Reached!</h1>");
    fs.readFile("views/index.html", (err, data) => 
    {
        if (err) return console.log(err);
        res.write(data);
    });
    
});

// let server = app.listen(8080, function () {
//     var host = server.address().address
//     var port = server.address().port
    
//     console.log("Example app listening at http://%s:%s", host, port)
//  });

app.listen(port , () => console.log(`App is running and listening on port ${port}`));
// console.log("app started");

// const http = require('http');
// const fs = require('fs');

// http.createServer( (req,res) => 
// {
//     res.writeHead(200, {'Content-Type': 'text/html'});
    
//     fs.readFile("views/index.html", (err, data) => 
//     {
//         if (err) return console.log(err);
//         res.write(data);
//     });
// }).listen(8080);