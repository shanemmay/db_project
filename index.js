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