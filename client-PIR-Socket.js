  /*dependencias*/
var io = require('socket.io-client');
var socket = io.connect('http://localhost:8001',{reconnect:true});
var Gpio = require('onoff').Gpio,
pir = new Gpio(17, 'in', 'both');

/*inicia la funcion de detección*/
encenderPIR();
socket.on('activar',function(data){
  console.log('Prueba de funcion exitosa..!');
  });

/*funcion que permite observar la entrada del pin de datos de PIR
y envia un mensaje cuando el parametro valor corresponde a 1  */
function encenderPIR(){
  pir.watch(function(err, value) {
    if (err) exit();
      console.log('Intruso detectado: '+ new Date().toTimeString() + value);
      socket.emit('ledstatus','green');
    });
}

function exit() {
  pir.unexport();
  process.exit();
}

console.log('Pi Bot deployed successfully!');
console.log('Iniciando modo de pruebas...');
