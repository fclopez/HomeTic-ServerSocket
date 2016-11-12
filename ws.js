/*exporta el modulo al servidor que se esta escuchando*/
module.exports = function(server){
  var sio = require('socket.io');
  var mensaje = require('./mail');

  /*variables globales*/
  var ws = sio.listen(server);
  var sockets = {};

  ws.on('connection',function(socket){

    /*añade la nueva conexion al array de sockets*/
    sockets[socket.id] = socket;
    console.log('Usuario conectado: '+ socket.id);
    console.log('Total usuarios conectado: '+ Object.keys(sockets).length);

    /*Eventos*/
    socket.on('disconnect', function() {
      delete sockets[socket.id];
      console.log('Usuario desconectado: '+ socket.id);
      console.log('Total usuarios conectado: '+ Object.keys(sockets).length);
    });

    /*mensajes del control*/
    socket.on('statusPIR', function (data) {
      socket.broadcast.emit('SensorPIR', data);
      console.log('msgSPIR: '+ data);
    });

    socket.on('statusMQ2', function (data) {
      socket.broadcast.emit('SensorMQ2', data);
      console.log('msgSMQ2: '+ data);
    });

    socket.on('statusLED', function (data) {
      socket.broadcast.emit('SensorLED', data);
      console.log('msgSLED: '+ data);
    });

    socket.on('statusAGUA', function (data) {
      socket.broadcast.emit('SensorAgua', data);
      console.log('msgSAGUA: '+ data);
    });
    /* fin mensajes del control*/

    socket.on('msgPIR', function (data) {
      mensaje.sendEmailPIR();
      socket.broadcast.emit('msgPIR', data);
      console.log("SensorPIR: "+data);
    });

    socket.on('msgAGUA', function (data) {
      mensaje.sendEmailAGUA();
      socket.broadcast.emit('msgAGUA', data);
      console.log("SensorPIR: "+data);
    });

    /*Fin del bloque de eventos*/

  });

};
