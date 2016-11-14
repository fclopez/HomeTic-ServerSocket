/*https://www.npmjs.com/package/request*/

var request = require('request');
request('http://hometic.apphb.com/api/registro', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage. 
  }
})