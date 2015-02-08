var app = require('http').createServer(handler);
var io = require('socket.io').listen(app);
var fs = require('fs');
var sock;

app.listen(8001, function(){
 console.log('listening on *.8001');
});

// button is attaced to pin 18, led to 17
var GPIO = require('onoff').Gpio;
var led = new GPIO(17, 'out');
var button = new GPIO(18, 'in', 'both');

//Init LED to off
led.writeSync(0);
 
function handler (req, res) {
  fs.readFile('index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }
    res.writeHead(200);
    res.end(data);
  });
}

// pass the callback function to the
  // as the first argument to watch() and define
  // it all in one step
  button.watch(function(err, state) {
    console.log('button.watch');
    // check the state of the button
    // 1 == pressed, 0 == not pressed
    if(state == 1) {
    // turn LED on
      console.log('LED on');
      led.writeSync(1);
      if (sock) {
        sock.emit('ledstatus','green');
      };
          
    } else {
      // turn LED off
      console.log('LED off');
      led.writeSync(0);
      if (sock) {
        sock.emit('ledstatus','red');
      };
    }
  });
 
io.on('connection', function (socket) {

  sock = socket;
  
  socket.on('led', function (data) {
    console.log(data);
    if (data == 'on'){
          led.writeSync(1);
          socket.emit('ledstatus', 'green');
 
    }else{
        led.writeSync(0);
        socket.emit('ledstatus', 'red');
    }
  });
});
 
