var http = require("http");
var url = require("url");
var querystring = require("querystring");

function start(route, handle) {
  http.createServer(function(request, response) {
    var pathname = url.parse(request.url).pathname;
    var query = url.parse(request.url).query
    var qs = querystring.parse(query);
    route(pathname, qs, handle, response);
  }).listen(8888);
  console.log("Server has started.");
}

exports.start = start;
