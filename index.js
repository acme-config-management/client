var express = require('express');
var path = require('path');
var fetch = require('node-fetch');
var app = express();

require('dotenv').config();

var port = process.env.PORT || 3000;
var gatewayURI = process.env.GATEWAY_URI || 'https://jsonplaceholder.typicode.com/posts/1';

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index', { gatewayURI: gatewayURI });
});

app.get('/getJSON', function(req, res) {
  return fetch(gatewayURI)
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      return res.send(JSON.stringify(response, null, 2));
    })
    .catch(function(error) {
      console.log(error);
      return res.send(error);
    });
})

app.listen(port, function () {
  console.log('Client listening on port ' + port);
});
