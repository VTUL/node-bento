exports.getResults = function (query, callback, source, search) {
  var request = require('request')
  var config = require('../config.js')
  var aparse = require('../parsers/google-parser.js').parse

  var submitUrl = config[source]['url'] + 'key=' + config[source]['key'] + '&cx=' + search.cx + '&fields=' + config[source]['fields'] + '&q=' + query

  request(submitUrl, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      console.log(response.statusCode)
      var parsed = aparse(JSON.parse(body).items, search)
      var data = {
        'records': parsed,
        'query': query,
        'searchTitle': search['title'],
        'resultNum': 10,
        'resultUrl': ''
      }
      callback(null, data)
    } else {
      console.log(response.statusCode)
      console.log(response.headers)
    }
  })
}
