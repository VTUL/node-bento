exports.getResults = function (query, callback, source, search) {
  var request = require('request')
  var config = require('../config.js')
  var aparse = require('../parsers/libguides-parser.js').parse

  var submitUrl = config[source]['url'] + 'site_id=' + config[source]['siteId'] + '&key=' + config[source]['key'] + '&sort_by=relevance' + '&search_terms= ' + query

  request(submitUrl, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      console.log(response.statusCode)
      var parsed = aparse(JSON.parse(body))
      parsed.push({'query': query, 'searchTitle': search['title']})
      callback(null, parsed)
    } else {
      console.log(response.statusCode)
      console.log(response.headers)
    }
  })
}
