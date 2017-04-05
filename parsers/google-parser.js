function processUrl (urlArray) {
  return typeof urlArray !== 'undefined' ? urlArray : false
}

function processTitle (titleArray) {
  return typeof titleArray !== 'undefined' ? titleArray : false
}

module.exports = {
  parse: function (data) {
    if (data.length === 0) {
      return [{'results': false}]
    } else {
      var parsedArray = []
      for (var x = 0; x < data.length; x++) {
        parsedArray.push({
          'url': processUrl(data[x]['link']),
          'title': processTitle(data[x]['title'])
        })
      }
      return parsedArray
    }
  }
}
