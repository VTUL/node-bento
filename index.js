var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var allowCrossDomain = function(req, res, next) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
      if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};

app.use(bodyParser.urlencoded({extended: true}));
app.use(allowCrossDomain);

app.post('/', function (req, res) {
  callApi(req,res, req.body.search);
})

app.post('/summon', function (req, res) {
  callApi(req,res, "summon");
})

app.post('/books', function (req, res) {
  callApi(req,res, "books");
})

app.post('/articles', function (req, res) {
  callApi(req,res, "articles");
})

app.post('/google', function(req, res) {
  callApi(req,res, "google");
})

app.post('/libguides', function(req, res) {
  callApi(req,res, "libguides")
})

app.post('/vtresearch', function(req, res) {
  callApi(req,res, "vtresearch")
})

app.listen(3000, function () {
  console.log('App listening on port 3000')
})

function callApi(req,res, source) {
  if(source === "summon") {
    var api = require("./controllers/summon.js");
  } else if (source === "google") {
    var api = require("./controllers/google.js");
  } else if (source === "libguides") {
    var api = require("./controllers/libguides.js");
  } else if (source === "vtresearch") {
    var api = require("./controllers/google.js");
  } else if (source === "books") {
    var api = require("./controllers/summon.js");
  } else if (source === "articles") {
    var api = require("./controllers/summon.js");
  }

  api.getResults(req.body.query, function(err,result) {
    res.status(200).send(result);
  }, source) 
}

