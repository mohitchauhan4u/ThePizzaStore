const express = require("express");
require("morgan");
const colors = require("colors");
const morgan = require("morgan");
const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//route
app.get("/", (req, res) => {
  res.send("<h1>Hello h node server ki taraf se</h1>");
});
app.listen(8080, () => {
  console.log("server running on port 8080");
});
