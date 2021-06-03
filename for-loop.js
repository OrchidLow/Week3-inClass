
// Step 1: how do we import modules in our code?
let http = require('http');

// localhost
// http.createServer (function (req, res){
http.createServer ((req, res) => {
    // Specify a return code
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });

    console.log(req.url);

    // The difference between let and var is var is global and let is local
    // SCOPE > life cycle of a variable
    for (let i = 1; i <= 20; i++) {
        res.write(i + '<br />');

        console.log(i);
    }

    res.end();

}).listen(3000);    // 8080 also good

console.log('App is running on http://localhost:3000');