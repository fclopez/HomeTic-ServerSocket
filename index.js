/*dependencias*/
var http = require('http');
var express = require('express');
var path = require('path');
var app = express();

/*importo el modulo ws*/
var port = process.env.PORT || 8000
var websockets = require('./ws');

/*se regresa al directorio padre y entra al directorio app*/
/*app.use(express.static(__dirname + '/index.html'));*/
var index = path.join(__dirname, 'index.html');

app.use( function(req, res){
	res.sendFile(index)
});

app.listen(port,function(){
	websockets(this);
	console.log('servidor escuchando en el puerto '+port)
});

/*var server = http.createServer(app);

server.listen(port,function(){
	websockets(this);
});*/

/*console.log('Servidor activo en el puerto %d',port);*/
