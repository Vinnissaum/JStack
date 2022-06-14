const http = require('http');

const routes = require('./routes');

const { bodyParser } = require('./helpers/bodyParser');

const { URL } = require('url');

const server = http.createServer((request, response) => {
  const parsedUrl = new URL('http://localhost:3000'+request.url);

  let { pathname } = parsedUrl;
  let id = null;
  
  const splitParams = pathname.split('/').filter(Boolean);

  if (splitParams.length > 1) {
    pathname = `/${splitParams[0]}/:id`;
    id = splitParams[1];
  }
  
  const route = routes.find((routeObj) => (
    request.method ===  routeObj.method && pathname === routeObj.endpoint
  ));
  if (route) {
    request.query = Object.fromEntries(parsedUrl.searchParams);
    request.params = { id }; 

    response.send = (statusCode, body) => {
      response.writeHead(statusCode, { 'Content-type': 'application/json' });
      response.end(JSON.stringify(body));
    }

    if (['POST', 'PUT', 'PATCH'].includes(request.method)) {
      bodyParser(request, () => route.handler(request, response));
    } else {
      route.handler(request, response);
    }

  } else {
    response.writeHead(404, {'Content-Type': 'text/html'});
    
    response.end('<h1>Page not found</h1>');
  }
});

server.listen(3000, () => console.log('Server is listening on port 3000 http://localhost:3000'));