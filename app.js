let http = require('http');
let fs = require('fs');

let server = http.createServer(function (req, res) {
    console.log('request was made: ' + req.url);
    if(req.url === '/home' || req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'}); 
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if(req.url === '/films'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/films.html').pipe(res);
    } else if(req.url === '/shorts'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/shorts.html').pipe(res);
    } else if(req.url === '/about_us'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/about_us.html').pipe(res);
    } else if(req.url === '/contact_us'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + 'contact_us.html').pipe(res);
    }
});
server.listen(3000, '127.0.0.1');
console.log('Howdy do, guys! Now listening to port 3000!');