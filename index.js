/*dependencias*/
var http = require('http');
var express = require('express');
var path = require('path');
var app = express();

/*variables globales*/
var port = process.env.PORT || 8000
var websockets = require('./ws');
var index = path.join(__dirname, 'index.html');

/*funcion callback*/
app.use( function(req, res){
	res.sendFile(index)
});

app.listen(port,function(){
	websockets(this);
	console.log('servidor escuchando en el puerto '+port)
});

/*var server = http.createServer(app);*/
