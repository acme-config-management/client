var express = require('express');
var path = require('path');
var app = express();

var port = process.env.PORT | 3000;
var gatewayURI = process.env.GATEWAY_URI | 'http://localhost:8080';

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(path.resolve('./public/index.html'));
});

app.listen(port, function () {
  console.log('Client listening on port ' + port);
});
