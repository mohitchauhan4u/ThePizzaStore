const express = require("express");
const connectDB = require("./config/config");
const dotenv = require("dotenv");
require("morgan");
const colors = require("colors");
const morgan = require("morgan");
const app = express();
require("colors");

//config mongodb
dotenv.config();
//connection mongodb
connectDB();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//route
app.use("/api/pizzas", require("./routes/pizzaRoute"));
app.use("/api/users", require("./routes/userRoutes"));
app.get("/", (req, res) => {
  res.send("<h1>Hello h node server ki taraf se bhai ko</h1>");
});
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(
    `Server running on ${process.env.NODE_ENV} mode on port no ${process.env.PORT}`
      .bgMagenta.white
  );
});
