var http = require('http');

http.createServer(function (req,res){
	res.writeHead(200,{ 'Content-Type': 'text/plain' });
	res.end('Hello cruel world....');

}).listen(3000);

console.log('Server started on localhost: 3000; press control-c to terminate....');

