function processUrl (urlArray) {
  return typeof urlArray !== 'undefined' ? urlArray : false
}

function processAuthor (authorArray) {
  var processedData = ''
  if (typeof authorArray !== 'undefined') {
    for (var x = 0; x < authorArray.length; x++) {
      if (x === 0) {
        processedData += authorArray[x]
      } else {
        processedData = processedData + '; ' + authorArray[x]
      }
    }
  } else {
    processedData = false
  }
  return processedData
}

function processTitle (titleArray, subtitleArray) {
  var processedData = ''
  if (typeof titleArray !== 'undefined') {
    processedData += titleArray[0]
    if (typeof subtitleArray !== 'undefined') {
      processedData = processedData + ': ' + subtitleArray[0]
    }
  } else {
    processedData = false
  }
  // uncomment to remove <h> tags from returned titles
  // processedData = processedData.replace(new RegExp('<h>', 'gm'), '')
  // processedDatad = processedData.replace(new RegExp('</h>', 'gm'), '')
  return processedData
}

function processYear (yearArray) {
  return typeof yearArray !== 'undefined' ? yearArray[0] : false
}

function processImage (imageArraySmall, imageArrayMedium, imageArrayLarge) {
  if (typeof imageArraySmall !== 'undefined') {
    return imageArraySmall[0]
  } else if (typeof imageArrayMedium !== 'undefined') {
    return imageArrayMedium[0]
  } else if (typeof imageArrayLarge !== 'undefined') {
    return imageArrayLarge[0]
  } else {
    return false
  }
}

module.exports = {
  parse: function (data, search) {
    if (data.length === 0) {
      return false
    } else {
      var parsedArray = []
      for (var x = 0; x < search.resultTotal; x++) {
        parsedArray.push({
          'url': processUrl(data[x]['link']),
          'author': processAuthor(data[x]['Author']),
          'title': processTitle(data[x]['Title'], data[x]['Subtitle']),
          'year': processYear(data[x]['PublicationYear']),
          'image': processImage(data[x]['thumbnail_s'], data[x]['thumbnail_m'], data[x]['thumbnail_l']),
          'fullText': data[x]['hasFullText']
        })
      }
      return parsedArray
    }
  }
}
