  /*dependencias*/
var io = require('socket.io-client');
var Gpio = require('onoff').Gpio;

/*variables globales*/
var socket = io.connect('http://localhost:8001',{reconnect:true});
pir = new Gpio(17, 'in', 'both');

/*inicia la funcion de detección*/
socket.on('activar',function(){
  encenderPIR();
});

/*funcion que permite observar la entrada del pin de datos de PIR */
function encenderPIR(){
  console.log('Sensor PIR Activado.');

  /*evento que revisa el estado del pin de entrada*/
  pir.watch(function(err, value) {
    if (err) exit();
      console.log('Intruso detectado: '+ new Date().toTimeString() + value);
    });
  }

function exit() {
  pir.unexport();
  process.exit();
}

console.log('Cliente Socket RaspberryPI 3 \nIniciando modo de pruebas...');
