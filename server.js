let http = require('http');

let server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<p>Public Domain TV</p>');
});
server.listen(3000);