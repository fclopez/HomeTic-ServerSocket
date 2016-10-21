var GPIO = require('onoff').Gpio;
var io = require('socket.io-client');
var socket = io.connect('http://localhost:8001',{reconnect:true});

//se inicia el pin 17 con estado apagado
var led = new GPIO(17, 'out');
led.writeSync(0);

/*funcion del socket el cual cambia de estado al led*/
socket.on('led', function (data) {
  if (data == 'on'){
    ledOn();
  }else{
    ledOff();
  }
});

/*funcion para encender el led*/
function ledOn(){
  console.log("led encendido");
  socket.emit('ledstatus', 'green');
  led.writeSync(1);
}

/*funcion para apagar el led*/
function ledOff(){
  console.log("led apagado");
  socket.emit('ledstatus', 'red');
  led.writeSync(0);
}
