const http = require("http");

const server = http.createServer((req, res) => {
	res.writeHead(200);
	res.end("Hello from NodeJS at: " + req.url);
});

server.listen(3000);
