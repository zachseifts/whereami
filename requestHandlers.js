var sys = require("sys");
var client = require("./lib/redis-node-client/lib/redis-client").createClient();
var exec = require("child_process").exec;

function loc(querystring, response) {
  var content = 'empty';
  var name = querystring['name'];
  var lat = querystring['lat'];
  var lon = querystring['lon'];
  var command = 'redis-cli LPUSH location.'+name+' "' + lat + ',' + lon + '"';
  exec(command, function (error, stdout, stderr) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end();
    console.log(querystring);
  });
}

exports.loc = loc

