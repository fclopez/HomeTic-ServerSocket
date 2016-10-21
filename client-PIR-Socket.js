  /*dependencias*/
var io = require('socket.io-client');
var socket = io.connect('http://localhost:8001',{reconnect:true});
var Gpio = require('onoff').Gpio,
pir = new Gpio(17, 'in', 'both');

/*inicia la funcion de detección*/
console.log('Cliente Socket RaspberryPI 3 \nIniciando modo de pruebas...');
socket.on('activar',encenderPIR());

/*funcion que permite observar la entrada del pin de datos de PIR */
function encenderPIR(){
  console.log('Sensor PIR Activado.');
  pir.watch(function(err, value) {
    if (err) exit();
      console.log('Intruso detectado: '+ new Date().toTimeString() + value);
    });
  }

function exit() {
  pir.unexport();
  process.exit();
}
