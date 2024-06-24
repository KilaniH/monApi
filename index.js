const jsonServer = require("json-server"); // import json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001; // any port number Headers

server.use(middlewares);
serveruse(router);

server.listen(port);
