var path = require('path');
var express = require('express');
var app = express();

app.use('/static', express.static(path.resolve(__dirname, '../client')));
app.use(/^\/{0,1}$/, express.static(path.resolve(__dirname, '../client')));

var server = app.listen(8080, function () {
  	var port = server.address().port;

  	console.log('Listening at http://localhost:%s', port);
});