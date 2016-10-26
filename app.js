var moment = require('moment');
var http = require('http');
var server = http.createServer(function (request, response) {
response.writeHead(200, {"Content-Type": "text/plain"});
response.end("555555555555\n");
});
server.listen(3000);
console.log("Server running at http://127.0.0.1:3000/");
console.log(moment().format("ddd, hA"));
