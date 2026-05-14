const http = require('http');
const color = process.env.COLOR || 'green';
const version = process.env.VERSION || 'v2';

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(`
    <html>
      <body style="background-color:${color}; display:flex; justify-content:center; align-items:center; height:100vh; margin:0;">
        <div style="text-align:center; color:white; font-family:Arial; font-size:2em;">
          <h1>Color App</h1>
          <h2>Version: ${version}</h2>
          <h2>Color: ${color}</h2>
        </div>
      </body>
    </html>
  `);
});

server.listen(8080, () => console.log(`Running - ${color} - ${version}`));
