var h = require('http');
h.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Welcome to Node.js");
    res.end();
    // console.log("Welcome to Node.js")
}).listen(8080);