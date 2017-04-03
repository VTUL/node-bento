exports.getResults = function(search, callback, source) {

  var request = require('request');
  var config = require("../config.js");

  if (source === "vtresearch") {
    var cx = config.VTresearchcx;
  } else {
    var cx = config.cx;
  }

  var submitUrl = config.googleUrl + "key=" + config.googleKey + "&cx=" + cx + "&fields=" + config.fields + "&q=" + search;

  request(submitUrl, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(response.statusCode);
      callback(null, body);  
    } else {
      console.log(response.statusCode);
      console.log(response.headers);
    }
  })
}