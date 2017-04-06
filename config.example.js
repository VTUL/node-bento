var config = {
  'google': {
    'key': '',
    'fields': 'items(title,link)',
    'url': 'https://www.googleapis.com/customsearch/v1?',
    'searches': [
      {
        'enabled': true,
        'endpoint': 'library',
        'title': 'Library Website',
        'cx': '',
        'resultTotal': 5
      },
      {
        'enabled': true,
        'endpoint': '',
        'title': '',
        'cx': '',
        'resultTotal': 5
      }
    ]
  },
  'summon': {
    'key': '',
    'accessId': '',
    'response': 'application/json',
    'url': 'api.summon.serialssolutions.com',
    'uri': '/2.0.0/search',
    'searches': [
      {
        'enabled': true,
        'endpoint': 'books',
        'title': 'Books & Media',
        'filters': 's.fvf=ContentType,Book,false&s.light=true&s.q=',
        'searchUrl': '',
        'resultTotal': 5
      },
      {
        'enabled': true,
        'endpoint': 'articles',
        'title': 'Articles',
        'filters': 's.fvf=ContentType,Journal Article,false&s.light=true&s.q=',
        'searchUrl': '',
        'resultTotal': 5
      },
      {
        'enabled': true,
        'endpoint': 'journals',
        'title': 'Journals',
        'filters': 's.fvf=ContentType,Journal,false&s.light=true&s.q=',
        'searchUrl': '',
        'resultTotal': 5
      },
      {
        'enabled': true,
        'endpoint': 'databases',
        'title': 'Databases',
        'filters': 's.fvf=ContentType,Database,false&s.light=true&s.q=',
        'searchUrl': '',
        'resultTotal': 5
      }
    ]
  },
  'libguides': {
    'key': '',
    'siteId': '',
    'url': 'https://lgapi.libapps.com/1.1/guides?',
    'searches': [
      {
        'enabled': true,
        'endpoint': 'libguides',
        'title': 'Research Guides',
        'resultTotal': 5
      }
    ]
  }
}

module.exports = config
