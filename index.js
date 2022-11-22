const http = require('http');
require('dotenv').config()

const server = http.createServer((req, res) => {
  Object.entries(req.headers).forEach(h => {
    res.write(`${h[0]}: ${h[1]}\n`);
  })
  res.end();
});

const PORT = process.env.PORT ?? 3000

server.listen(PORT, () => {
  console.log(`Server is running at port ${PORT} ...`)
});
