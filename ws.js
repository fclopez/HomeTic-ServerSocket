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

    socket.on('statusPIR', function (data) {
      socket.broadcast.emit('msgSPIR', data);
      console.log('Mensaje desde el control: '+ data);
    });

    socket.on('statusMQ2', function (data) {
      socket.broadcast.emit('msgSMQ2', data);
      console.log('Mensaje desde el control: '+ data);
    });

    socket.on('statusLED', function (data) {
      socket.broadcast.emit('msgSLED', data);
      console.log('Mensaje desde el control: '+ data);
    });

    socket.on('statusAGUA', function (data) {
      socket.broadcast.emit('msgSAGUA', data);
      console.log('Mensaje desde el control: '+ data);
    });

    socket.on('SensorPIR', function (data) {
      mensaje.sendEmail();
      socket.broadcast.emit('SensorPIR', data);
      console.log("Mensaje para el control: "+data);
    });
    /*Fin del bloque de eventos*/

  });

};
