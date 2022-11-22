const http = require('http');

const server = http.createServer((req, res) => {
  Object.entries(req.headers).forEach(h => {
    res.write(`${h[0]}: ${h[1]}\n`);
  })
  res.end();
});

server.listen(3000);
