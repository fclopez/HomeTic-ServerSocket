/*exporta el modulo al servidor que se esta escuchando*/
module.exports = function(server){
  var sio = require('socket.io');
  var mail = require('./modulo-correo');

  /*variables globales*/
  var ws = sio.listen(server);
  var sockets = {};

  ws.on('connection',function(socket){

    /*añade la nueva conexion al array de sockets*/
    sockets[socket.id] = socket;
    console.log('Usuario conectado: '+ socket.id);
    console.log('Total usuarios conectado: '+ Object.keys(sockets).length);

    /*Eventos genericos*/
    socket.on('disconnect', function() {
      delete sockets[socket.id];
      console.log('Usuario desconectado: '+ socket.id);
      console.log('Total usuarios conectado: '+ Object.keys(sockets).length);
    });

    socket.on('mensaje-correo',function(data){
      mail.sendMail(data);
    });

    /*Eventos SensorPIR*/
    socket.on('statusPIR', function (data) {
      socket.broadcast.emit('statusPIR', data);
      console.log('Mensaje desde el control: '+ data);
    });

    socket.on('SensorPIR', function (data) {
      socket.broadcast.emit('SensorPIR', data);
      console.log("Mensaje para el control: "+data);
    });

    /*Eventos SensorMQ2*/
    socket.on('statusMQ2', function (data) {
      socket.broadcast.emit('statusMQ2', data);
      console.log('Mensaje desde el control: '+ data);
    });

    socket.on('SensorMQ2', function (data) {
      socket.broadcast.emit('SensorMQ2', data);
      console.log("Mensaje para el control: "+data);
    });

    /*Eventos Led*/

    socket.on('statusLED', function (data) {
      socket.broadcast.emit('statusLED', data);
      console.log('Mensaje desde el control: '+ data);
    });

    socket.on('LED', function (data) {
      socket.broadcast.emit('LED', data);
      console.log("Mensaje para el control: "+data);
    });

    /*Eventos SensorCaudal*/

    socket.on('statusCaudal', function (data) {
      socket.broadcast.emit('statusCaudal', data);
      console.log('Mensaje desde el control: '+ data);
    });

    socket.on('SensorCaudal', function (data) {
      socket.broadcast.emit('SensorCaudal', data);
      console.log("Mensaje para el control: "+data);
    });


  });

};
