/**
 * heroku info
 * https://fierce-cliffs-32311.herokuapp.com/ | https://git.heroku.com/fierce-cliffs-32311.git
 */
const express = require("express");
const app = express();
const port = 8080;

const fs = require('fs');
const path=require('path');
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
const url = require('url');


const data = require('./data/data.json');
let cart = {};

//can access any file by using rout /file/file_name
app.use('/file', express.static(path.join(__dirname, 'views')) );

app.get('/', (req,res) => 
{
    // res.write("<h1>App Reached!</h1>");
    fs.readFile("views/index.html", (err, data) => 
    {
        if (err) return console.log(err);
        res.write(data);
    });
    
});

// app.get('/', (req,res) =>
// {
//     // res.write('<h1>main page</h1>');
//     //getting url query to search db for resulting items
//     var url_parts = url.parse(req.url, true);
//     var query = url_parts.query;
//     console.log(req.query);
//     //getting the navbar and search
//     //search(res, navbar(res));
//     navbar(res);
//     search(res);
// });

app.get('/cart', (req,res) =>
{
    // res.write('<h1>cart and checkout page</h1>');
    //nav bar PUT IN FUNCTION  
    fs.readFile("views/nav.html", (err, data) => 
    {
        if (err) return console.log(err);
        res.write(data);
        let numOfResults = 10;
        for(let i = 0; i < numOfResults; i ++)
        {
            res.write('<div class="card"><div class="card-body">item in cart</div></div>');
        }
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
    //nav bar PUT IN FUNCTION  
    // fs.readFile("views/nav.html", (err, data) => 
    // {
    //     if (err) return console.log(err);
    //     res.write(data);
    //     callback();
    // });  
    res.write('<!DOCTYPE html> <html> <head> <meta charset="utf-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <title>Page Title</title> <meta name="viewport" content="width=device-width, initial-scale=1"> <!-- <link rel="stylesheet" type="text/css" media="screen" href="main.css" /> <script src="main.js"></script> --> <!-- Bootstrap info --> <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"> <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script> <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script> <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script> </head> <body> <nav class="navbar navbar-expand-lg navbar-light bg-light "> <a class="navbar-brand" href="#">the Store</a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarNavDropdown"> <ul class="navbar-nav"> <li class="nav-item active"> <a class="nav-link" href="http://localhost:8080/">Shop <span class="sr-only">(current)</span></a> </li> <li class="nav-item active"> <a class="nav-link" href="http://localhost:8080/cart">Cart & Checkout <span class="sr-only">(current)</span></a> </li> </ul> </div> </nav> </body> </html>');   
};

const search = (res , callback = () => {}) =>
{
    // search results of items  PUT IN FUNCTION  , ONLY SHOW QUERY RESULTS
    // fs.readFile("views/search.html", (err, data) => 
    // {
    //     if (err) return console.log(err);
    //     res.write(data);
    //     callback();
    // });
    callback(res);
    res.write("<script> let cart = {};</script>");
    // for(let item in data)
    // {
    //     res.write(`<div class="card" style="width: 18rem; margin: auto;"><img class="card-img-top" src="${data[item].image}" alt="Card image cap" ><div class="card-body"><h5 class="card-title">${data[item].name}</h5><p class="card-text">${data[item].description}</p><button  class="btn btn-primary" onclick="${onItemSelect}">${data[item].price}</button></div></div>`);
    // }
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

