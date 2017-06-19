exports.getResults = function (callback) {
  var request = require('request')
  var aparse = require('../parsers/instagram-parser.js').parse

  var submitUrl = 'https://www.instagram.com/vtlibraries/media/'

  request(submitUrl, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      var parsed = aparse(JSON.parse(body))
      console.log(parsed)
      callback(null, parsed)
    } else {
      console.log(response.statusCode)
      console.log(response.headers)
    }
  })
}
