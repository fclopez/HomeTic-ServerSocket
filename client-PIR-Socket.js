  /*dependencias*/
var io = require('socket.io-client');
var socket = io.connect('http://localhost:8001',{reconnect:true});
var Gpio = require('onoff').Gpio,
pir = new Gpio(17, 'in', 'both');

socket.on('activar',function(data){
  pir.watch(function(err, value) {
    if (err) exit();
    if(value == 1){
      console.log('detected');
      socket.emit('ledstatus','green');
    };
  });
})

/*funcion que permite observar la entrada del pin de datos de PIR
y envia un mensaje cuando el parametro valor corresponde a 1  */
function encenderPIR(){

}

function exit() {
  pir.unexport();
  process.exit();
}

console.log('Pi Bot deployed successfully!');
console.log('Guarding the Magic pencil...');
