import { createServer } from "http";

const server = createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page!");
    return;
  }

  if (req.url === "/about") {
    res.write("Hi, I am Indra!");
    res.write(" - The Creator");
    res.end();
    return;
  }

  res.end("Are you lost?");
});

server.listen(5000);
