/*dependencias*/
var http = require('http');
var express = require('express');
var app = express();

/*importo el modulo ws*/
var port = process.env.PORT || 8000
var websockets = require('./ws');

/*se regresa al directorio padre y entra al directorio app*/
app.use(express.static(__dirname + '/'));

var server = http.createServer(app);

server.listen(port,function(){
	websockets(this);
	console.log('Servidor activo en el puerto %d',port);
});
