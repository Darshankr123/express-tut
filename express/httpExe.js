const http = require("http");
const { readFileSync } = require("fs");

const homePage = readFileSync("./index.html");

const server = http.createServer((req, res) => {
  console.log("user hit the server");

  const url = req.url;

  if (url === "/") {
    res.writeHead(200, "text/plain");
    res.write(homePage);
    res.end();
  } else if (url === "/contact") {
    res.writeHead(200, "text/html");
    res.write("<h1>cantact page</h1");
    res.end();
  } else {
    res.writeHead(404, "text/html");
    res.write("<h1>Error Page</h1>");
    res.end();
  }
});

server.listen(5000, () => {
  console.log("server is listening on port 5000");
});
