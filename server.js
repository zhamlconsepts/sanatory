const http = require('http');
const fs = require('fs');
const path = require('path');


const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp'
};

const server = http.createServer((req, res) => {
  let reqUrl = req.url.split('?')[0];
  let filePath = path.join(__dirname, reqUrl === '/' ? 'index.html' : reqUrl);

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>404 Sahifa topilmadi</h1>', 'utf-8');
      } else {
        res.writeHead(500);
        res.end(`Server xatosi: ${err.code}`);
      }
    } else {
      res.writeHead(200, { 
        'Content-Type': `${contentType}; charset=utf-8`,
        'Cache-Control': 'no-cache'
      });
      res.end(content, 'utf-8');
    }
  });
});

let PORT = parseInt(process.env.PORT) || 4500;

function startServer(port) {
  server.listen(port, () => {
    console.log(`SihatMaskan serveri ishga tushdi: http://localhost:${port}`);
  });
}

server.on('error', (e) => {
  if (e.code === 'EADDRINUSE') {
    console.log(`Port ${PORT} band, keyingisiga o'tilmoqda...`);
    PORT++;
    startServer(PORT);
  } else {
    console.error(e);
  }
});

startServer(PORT);
