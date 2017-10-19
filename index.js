var express = require('express');
var path = require('path');
var app = express();

var port = process.env.PORT | 3000;

app.get('/', function(req, res) {
  res.sendFile(path.resolve('./public/index.html'));
});

app.listen(port, function () {
  console.log('Client listening on port ' + port);
});
