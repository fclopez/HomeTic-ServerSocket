/*exporta el modulo al servidor que se esta escuchando*/
module.exports = function(server){
  var sio = require('socket.io');

  /*variables globales*/
  var ws = sio.listen(server);
  var sockets = {};

  ws.on('connection',function(socket){
    socket.emit('ready');

    /*añade la nueva conexion al array de sockets*/
    sockets[socket.id] = socket;
    console.log('Usuario conectado: '+ socket.id);
    console.log('Total usuarios conectado: '+ Object.keys(sockets).length);

    /*Eventos*/
    socket.on('disconnect', function() {
      console.log('Usuario desconectado: '+ socket.id);
      console.log('Total usuarios conectado: '+ Object.keys(sockets).length);
      delete sockets[socket.id];
    });

    socket.on('led', function (data) {
      socket.broadcast.emit('led', data);
      console.log(data);
    });

    socket.on('ledstatus', function (data) {
      socket.broadcast.emit('ledstatus', data);
      console.log(data);
    });

    socket.on('activar', function (data) {
      socket.broadcast.emit('activar', data);
      console.log(data);
    });
    /*Fin del bloque de eventos*/

  });
  
};
