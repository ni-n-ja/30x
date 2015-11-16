var http = require('http');
var fs = require('fs');

var ip_addr = process.env.IP || '127.0.0.1';
var port = process.env.PORT || '8080';

http.createServer(function(request, response) {
  switch (request.url) {
    default: try {
      var dataPng = fs.readFileSync('.' + request.url, 'binary');
    }
    catch (e) {
      response.writeHead(404, {
        "Content-Type": "text/plain"
      });
      response.write("404 Not Found\n");
      response.end();
      break;
    }
    response.writeHead(200, {
      'Content-Type': 'image/png'
    });
    response.write(dataPng, 'binary');
    response.end();
    break;
    case '/':
        var dataMainHtml = fs.readFileSync('index.html');
      response.writeHead(200, {
        'Content-Type': 'text/html'
      });
      response.write(dataMainHtml);
      response.end();
      break;
    case '/style.css':
        var dataCss = fs.readFileSync('./style.css', 'UTF-8');
      response.writeHead(200, {
        'Content-Type': 'text/css'
      });
      response.write(dataCss);
      response.end();
      break;
    case '/web.js':
        var dataWebJs = fs.readFileSync('./web.js', 'UTF-8');
      response.writeHead(200, {
        'Content-Type': 'text/javascript'
      });
      response.write(dataWebJs);
      response.end();
      break;
  }
}).listen(port, ip_addr, function() {
  console.log('Server Working!!');
});