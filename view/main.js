$(function() {

  //var host = location.origin;
  //var socket = io.connect(host);
  var socket = io.connect();
  var el = document.getElementById('server-time');


  socket.on('status', function (data) {
    /*$("body").css("background-color", data);*/
    console.log("Mensaje desde cliente hasta el server :" +data);
  });


  /*setInterval(function () {
		socket.emit('time', new Date().toTimeString()), 1000
	});
  socket.on('time', function(timeString) {
    el.innerHTML = 'Hora del servidor: ' + timeString;
  });*/

  /*Funciones de respuesta*/
  function pirON(){
    socket.emit('SensorPIR', 'true');
  }

  function pirOFF(){
    socket.emit('SensorPIR', 'false');
  }

}
