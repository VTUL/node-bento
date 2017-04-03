exports.getResults = function(search, callback, source) {
  
  var request = require('request');
  var config = require("../config.js");

  var submitUrl = config.libguidesUrl + "site_id=" + config.site_id + "&key=" + config.libguidesKey + "&sort_by=relevance" + "&search_terms= " + search;

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