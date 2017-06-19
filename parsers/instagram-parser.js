function processUrl (urlArray) {
  return typeof urlArray !== 'undefined' ? urlArray : false
}

function processImage (imageArray) {
  return typeof imageArray !== 'undefined' ? imageArray : false
}

function processDesc (descArray) {
  return typeof descArray !== 'undefined' ? descArray : false
}

module.exports = {
  parse: function (data) {
    if (data.length === 0) {
      return false
    } else {
      var parsedArray = []
      var returnedResults = 3
      for (var x = 0; x < returnedResults; x++) {
        parsedArray.push({
          'url': processUrl(data['items'][x]['link']),
          'description': processDesc(data['items'][x]['caption']['text']),
          'imageUrl': processImage(data['items'][x]['images']['standard_resolution']['url'])
        })
      }
      return parsedArray
    }
  }
}
