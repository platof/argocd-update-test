const http = require('http');
const os = require('os');

const hostname = '0.0.0.0';
const port = 8080;
const serverName = os.hostname();

const server = http.createServer((req, res) => {
    if (req.url === '/health') {
        // Handle /health endpoints
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Healthy');
    } else {
        // Handle root endpoint
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`Hello, guys!  thiss is working now the a test versione to see if argo updater actually works, still testing\nHandled by server: ${serverName}`);
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running on port ${port} (Handled by: ${serverName})`);
});
