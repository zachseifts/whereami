
function route(pathname, querystring, handle, response) {
  if (typeof handle[pathname] === 'function') {
     handle[pathname](querystring, response);
  } else {
    response.writeHead(404, {'Content-Type': 'text/html'});
    response.write("404 Not Found");
    response.end();
  }
}

exports.route = route
