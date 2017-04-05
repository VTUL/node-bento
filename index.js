var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var helmet = require('helmet')
var config = require('./config.js')

var allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
  if (req.method === 'OPTIONS') {
    res.send(200)
  } else {
    next()
  }
}

app.use(bodyParser.urlencoded({extended: true}))
app.use(allowCrossDomain)
app.use(helmet())

for (var key in config) {
  config[key]['searches'].forEach(function (search) {
    if (search['enabled']) {
      (function (key) {
        app.post('/' + search['endpoint'], function (req, res) {
          callApi(req, res, key, search)
        })
      })(key)
    }
  })
}

app.listen(3000, function () {
  console.log('App listening on port 3000')
})

function callApi (req, res, source, search) {
  // todo: if (source not in config or source file not exits) error and die
  var api = require('./controllers/' + source + '.js')
  console.log(source)
  api.getResults(req.body.query.replace(/[^\w\s]/gi, ''), function (err, result) {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(result)
    }
  }, source, search)
}

