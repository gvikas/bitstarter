express var = require('express');
var fs = require('fs');
var buffer = Buffer('utf-8');

var rf = fs.readFileSync("index.html");

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    response.send(rf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
