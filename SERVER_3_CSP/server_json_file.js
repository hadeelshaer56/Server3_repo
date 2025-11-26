const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
	const filePath = path.join(__dirname, "data.json");
	const fileContent = fs.readFileSync(filePath, "utf8");
	res.writeHead(200, {
		"Content-Type": "application/json"
	});

	res.end(fileContent);
});

server.listen(8080, () => {
	console.log("SERVER_3 Codespaces running on port 8080");
});
