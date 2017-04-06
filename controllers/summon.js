exports.getResults = function (query, callback, source, search) {
  var request = require('request')
  var crypto = require('crypto-js')
  var config = require('../config.js')
  var aparse = require('../parsers/summon-parser.js').parse
  var fullQuery = search['filters'] + query

  var date = new Date().toUTCString()
  var message = config[source]['response'] + '\n' + date + '\n' + config[source]['url'] + '\n' + config[source]['uri'] + '\n' + fullQuery + '\n'

  var hash = crypto.enc.Base64.stringify(crypto.HmacSHA1(message, config[source]['key']))

  var authentication = config[source]['accessId'] + hash

  var options = {
    url: 'http://' + config[source]['url'] + config[source]['uri'] + '?' + fullQuery,
    headers: {
      'Host': config[source]['url'],
      'Accept': config[source]['response'],
      'x-summon-date': date,
      'Authorization': authentication
    },
    json: true
  }

  request(options, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      console.log(response.statusCode)
      var parsed = aparse(body.documents, search)
      parsed.push({'resultNum': body.recordCount,
        'query': query,
        'resultUrl': search['searchUrl'] + query,
        'notEntry': 1,
        'searchTitle': search['title']})
      callback(null, parsed)
    } else {
      console.log(response.statusCode)
      console.log(response.headers)
    }
  })
}
