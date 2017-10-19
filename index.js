var express = require('express');
var path = require('path');
var app = express();

require('dotenv').config();

var port = process.env.PORT || 3000;
var gatewayURI = process.env.GATEWAY_URI || 'https://jsonplaceholder.typicode.com/posts/1';

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index', { gatewayURI: gatewayURI });
});

app.listen(port, function () {
  console.log('Client listening on port ' + port);
});
