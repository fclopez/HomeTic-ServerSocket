/*dependencias*/
//var path = require('path');
var http = require('http');
var express = require('express');
var websockets = require('./ws');

/*variables globales*/
var app = express();
var port = process.env.PORT || 8000;

/*aqui se puede usar un callback si se desea como response de un request
var index = path.join(__dirname, 'index.html')
app.use( function(req, res){ res.sendFile(index)})*/

app.use(express.static(__dirname + "/view"));
var server = http.createServer(app)

server.listen(port,function(){
	websockets(this);
	console.log('servidor escuchando en el puerto '+port);
});
