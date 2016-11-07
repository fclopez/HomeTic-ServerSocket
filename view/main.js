$(function() {

  //var host = location.origin;
  //var socket = io.connect(host);
  var socket = io.connect();
  var el = document.getElementById('server-time');

  while(true){
    el.innerHTML = 'Hora del servidor: ' + new Date().toTimeString();
  }


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
