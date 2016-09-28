'use strict';

var url = require('url'),
    http = require('http'),
    path = require('path');

var server = http.createServer( (req, res)=> {
    req.url = path.normalize(url.parse(req.url).pathname);

    if (req.url.length > 1 && req.url[req.url.length - 1] === '/')
	req.url = req.url.substring(0, req.url.length - 1);

    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});

    res.end('nodejs server test');
});

server.listen(3000);
