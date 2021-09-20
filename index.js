const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const server = express();
const { client } = require("./db");

const apiRouter = require("./api");
server.use("/api", apiRouter);

server.use(morgan("dev"));
server.use(express.urlencoded({ extended: true }));

server.use(bodyParser.json());
const PORT = 3000;
client.connect();
server.listen(PORT, () => {
  console.log("The server is up on port", PORT);
});
