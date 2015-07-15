var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var os = require('os');
server.listen(8180);

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile('index.html');
});

// io.on('connection', function (socket) {
//   socket.emit('news', { hello: 'world' });
//   socket.on('my other event', function (data) {
//     console.log(data);
//   });
// });

setInterval(function(){
	var pcMem = ( os.freemem() * 100 ) / os.totalmem();
	var mem = {
		freeperc: pcMem
		, totalmem: os.totalmem()
		, freemem: os.freemem()
	}	
	retObj = {
		mem: mem
		, cpus: os.cpus() 
	}
	io.emit('news', retObj);
}, 3000);

