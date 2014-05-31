var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());

app.use(express.static(__dirname + '/app'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.get('*', function(req, res) {
  //res.send('Hello World!');
  res.sendfile('./app/index.html');
});

app.get('/partials/currentVideo.html', function(req, res) {
	res.render('./app/partials/currentVideo.html');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});