var sys = require("sys");
var exec = require("child_process").exec;

function loc(response, request) {
  var command = 'redis-cli LPUSH location.ips "' + request.connection.remoteAddress + '"';
  exec(command, { timeout: 10000, maxBuffer: 20000*1024 },
    function (error, stdout, stderr) {
      response.writeHead(200, {"Content-Type": "text/html"});
      response.end();
      console.log(stdout);
    });
}

exports.loc = loc

