var path 		= require('path'),
	express 	= require('express');
	app 		= express();

var clientDir = path.resolve(__dirname, '../client');

//combine?
app.use('/static', express.static(clientDir));
app.use(/^\/{0,1}$/, express.static(clientDir));

var server = app.listen(8080, function () {
  	var port = server.address().port;

  	console.log('Listening at http://localhost:%s', port);
});