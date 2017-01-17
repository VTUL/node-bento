exports.getResults = function(search, callback, source) {

  'use scrict';
  var request = require('request');
  var crypto = require('crypto-js');
  var config = require("../config.js");

  if (source === "books") {
    search = "s.fvf=ContentType,Book,false&s.light=true&s.q=" + search;
  } else if (source === "articles") {
    search = "s.fvf=ContentType,Journal Article,false&s.light=true&s.q=" + search;
  } else {
    search = "s.light=true&s.q=" + search;
  }

  var date = new Date().toUTCString();
  var message = config.summonResponse + "\n" + date + "\n" + config.summonUrl + "\n" + config.summonUri + "\n" + search + "\n"
  
  var hash = crypto.enc.Base64.stringify(crypto.HmacSHA1(message, config.summonKey));

  var authentication = config.summonAccessId + hash;

  var options = {
    url: 'http://' + config.summonUrl + config.summonUri + '?' + search,
    headers: {
      'Host': config.summonUrl,
      'Accept': config.summonResponse,
      'x-summon-date': date,
      'Authorization': authentication
    },
    json: true
  };

  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(response.statusCode);
      callback(null, body.documents);  
    } else {
      console.log(response.statusCode);
      console.log(response.headers);
    }
  })
}
