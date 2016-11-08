$(function() {

  var host = location.origin;
  var socket = io.connect(host);
  var el = document.getElementById('server-time');

  el.innerHTML = 'Hora del servidor: ';

  socket.on('status', function (data) {
    /*$("body").css("background-color", data);*/
    console.log("Mensaje desde cliente hasta el server :" +data);
  });

  /*Funciones de respuesta*/
  function pirON(){
    socket.emit('SensorPIR', 'true');
  }

  function pirOFF(){
    socket.emit('SensorPIR', 'false');
  }

}
