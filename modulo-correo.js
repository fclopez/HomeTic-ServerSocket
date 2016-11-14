/*dependencias globales*/
var nodemailer = require('nodemailer');
var timerId;
var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'HomeTicAPP@gmail.com',
    pass: 'testtype04'
  }
});

/*modulo generico para el envio de correos*/
module.exports.sendMail = function(msg) {
  if (timerId) return;
  timerId = setTimeout(function() {
    clearTimeout(timerId);
    timerId = null;
  }, 10000);

  console.log('Enviando Email..');

  var mailOptions = {
    from: 'HomeTicAPP <HomeTicAPP@gmail.com>',
    to: 'fclopez4@gmail.com',
    subject: '[HomeTicAPP] Novedad',
    html: '<b>Sr. Fclopez</b>,<br/><br/>La presente novedad se ha presentado en el servicio de monitoreo <br/><br/>Fecha de la novedad : ' + Date() + ' <br/>Novedad: '+ msg +'<br/><br/>Cordialmente,<br/><i>HomeTicAPP</i>',
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Message sent: ' + info.response);
    }
  });
}
