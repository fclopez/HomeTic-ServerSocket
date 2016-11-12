/*dependencias*/
var http = require('http');
var express = require('express');
var websockets = require('./ws');
var mail = require('./mail');

/*variables globales*/
var app = express();
var port = process.env.PORT || 8000;

/*define el directorio de las vistas*/
app.use(express.static(__dirname + "/view"));

/*callback que devuelve la vista index cuando recibe una peticion de home */
app.get('/', function(req, res){
	res.sendFile('index.html')
});

var server = http.createServer(app);

server.listen(port,function(){
	websockets(this);
	console.log('servidor escuchando en el puerto '+port);
});
