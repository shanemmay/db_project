/**
 * Following site for resources
 * 
 * Heroku getting started
 * https://github.com/heroku/node-js-getting-started/blob/master/index.js
 * 
 * node & mongo database
 * https://www.w3schools.com/nodejs/nodejs_mongodb_create_db.asp
 * 
 * sqllite
 * http://www.sqlitetutorial.net/sqlite-nodejs/
 * 
 * npm packages for databases
 * https://www.npmjs.com/search?q=keywords:database
 * 
 * mysql & node
 * http://www.mysqltutorial.org/mysql-nodejs/
 * 
 * more mysql
 * https://appdividend.com/2018/08/25/how-to-connect-nodejs-application-to-mysql-database/
 * 
 * hooking up different db to heroku
 * https://expressjs.com/en/guide/database-integration.html
 */
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