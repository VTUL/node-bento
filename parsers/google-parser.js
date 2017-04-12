function processUrl (urlArray) {
  return typeof urlArray !== 'undefined' ? urlArray : false
}

function processTitle (titleArray) {
  return typeof titleArray !== 'undefined' ? titleArray : false
}

module.exports = {
  parse: function (data, search) {
    if (data.length === 0) {
      return false
    } else {
      var parsedArray = []
      var cycles = data.length <= search.resultTotal ? data.length : search.resultTotal
      for (var x = 0; x < cycles; x++) {
        parsedArray.push({
          'url': processUrl(data[x]['link']),
          'title': processTitle(data[x]['title'])
        })
      }
      return parsedArray
    }
  }
}
