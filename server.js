var http = require("http");
var url = require("url");
querystring = require("querystring");

function start(route, handle) {
  http.createServer(function(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " recieved.");
    var query = url.parse(request.url).query
    var qs = querystring.parse(query);
    console.log("Request with querystring " + JSON.stringify(qs) + " recieved.");

    response.writeHead(200, {"Content-Type": "text/html"});
      var content = route(pathname, handle);
      response.write(content);
    response.end();
  }).listen(8888);
  console.log("Server has started.");
}

exports.start = start;
