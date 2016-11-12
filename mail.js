/*
envia el correo

require('./mailer').sendEmail(video_path);
require('./mailer').sendEmail();

*/

/*http://thejackalofjavascript.com/rpi-pir-sensor-node-iot-intruder-alert/*/

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'HomeTicAPP@gmail.com',
    pass: 'testtype04'
  }
});

var timerId;

module.exports.sendEmailPIR = function() {

  if (timerId) return;
  timerId = setTimeout(function() {
    clearTimeout(timerId);
    timerId = null;
  }, 10000);

  console.log('Enviando un Email..');

  var mailOptions = {
    from: 'HomeTicAPP <HomeTicAPP@gmail.com>',
    to: 'fclopez4@gmail.com',
    subject: '[HomeTicAPP SensorPIR] Intruso Detectado',
    html: '<b>Sr. fclopez</b>,<br/><br/>Se ha detectado un intruso<br/><br/> Intruso Detectado a las : ' + Date() + ' <br/><br/>Cordialmente,<br/><i>HomeTicAPP</i>',
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Message sent: ' + info.response);
    }
  });
}


module.exports.sendEmailPIR = function() {

  if (timerId) return;
  timerId = setTimeout(function() {
    clearTimeout(timerId);
    timerId = null;
  }, 10000);

  console.log('Enviando un Email..');

  var mailOptions = {
    from: 'HomeTicAPP <HomeTicAPP@gmail.com>',
    to: 'fclopez4@gmail.com',
    subject: '[HomeTicAPP SensorPIR] Intruso Detectado',
    html: '<b>Sr. fclopez</b>,<br/><br/>Se ha detectado un intruso<br/><br/> Intruso Detectado a las : ' + Date() + ' <br/><br/>Cordialmente,<br/><i>HomeTicAPP</i>',
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Message sent: ' + info.response);
    }
  });
}

module.exports.sendEmailAGUA = function() {

  if (timerId) return;
  timerId = setTimeout(function() {
    clearTimeout(timerId);
    timerId = null;
  }, 10000);

  console.log('Enviando un Email..');

  var mailOptions = {
    from: 'HomeTicAPP <HomeTicAPP@gmail.com>',
    to: 'fclopez4@gmail.com',
    subject: '[HomeTicAPP SensorPIR] Limite alcanzado',
    html: '<b>Sr. fclopez</b>,<br/><br/>Se ha alcanzado el limite<br/><br/> Se ha alcanzado el limite de consumo de agua por favor ahorrar <br/><br/>Cordialmente,<br/><i>HomeTicAPP</i>',
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Message sent: ' + info.response);
    }
  });
}
