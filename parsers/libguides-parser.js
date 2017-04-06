function processUrl (urlArray) {
  return typeof urlArray !== 'undefined' ? urlArray : false
}

function processTitle (titleArray) {
  return typeof titleArray !== 'undefined' ? titleArray : false
}

function processDesc (descArray) {
  return typeof descArray !== 'undefined' ? descArray : false
}

module.exports = {
  parse: function (data, search) {
    if (data.length === 0) {
      return false
    } else {
      var parsedArray = []
      for (var x = 0; x < search.resultTotal; x++) {
        parsedArray.push({
          'url': processUrl(data[x]['url']),
          'description': processDesc(data[x]['description']),
          'title': processTitle(data[x]['name'])
        })
      }
      return parsedArray
    }
  }
}
