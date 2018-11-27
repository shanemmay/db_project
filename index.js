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
const path=require('path');
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
const url = require('url');

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

app.get('/', (req,res) =>
{
    // res.write('<h1>main page</h1>');
    //getting url query to search db for resulting items
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    console.log(req.query);
    //getting the navbar and search
    search(res, navbar(res));
    
});

app.get('/cart', (req,res) =>
{
    // res.write('<h1>cart and checkout page</h1>');
    //nav bar PUT IN FUNCTION  
    fs.readFile("views/nav.html", (err, data) => 
    {
        if (err) return console.log(err);
        res.write(data);
    });
});

app.get('/profile', (req,res) =>
{
    // res.write('<h1>profile page</h1>');
    // res.write('<h1>make sure to add a url query here so you can tell which profile to show</h1>');
    //nav bar PUT IN FUNCTION  
    fs.readFile("views/nav.html", (err, data) => 
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

const navbar = (res, callback = () => {}) =>
{
    console.log(`navbar fired`);
    //nav bar PUT IN FUNCTION  
    fs.readFile("views/nav.html", (err, data) => 
    {
        if (err) return console.log(err);
        res.write(data);
        callback();
    });     
};

const search = (res , callback = () => {}) =>
{
    console.log(`search fired`);
    //search results of items  PUT IN FUNCTION  , ONLY SHOW QUERY RESULTS
    fs.readFile("views/search.html", (err, data) => 
    {
        if (err) return console.log(err);
        res.write(data);
        callback();
    });
}; 
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