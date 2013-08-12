var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path'),
// app.use(express.logger());

app.configure(function () {
    app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/', function(request, response) {
    var html = fs.readFileSync('index.html').toString();
    response.send(html);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log("Listening on " + port);
});
