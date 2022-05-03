const mongoose = require("mongoose");
const dotenv = require("dotenv");
require("colors");
const connectDb = require("./config/config");
const Pizza = require("./models/pizzaModel");
const Pizzas = require("./data/pizza-data");

//config dot env and mongodb conn file
dotenv.config();
connectDb();
//import data
const importData = async () => {
  try {
    await Pizza.deleteMany();
    const sampleData = Pizzas.map((pizza) => {
      return { ...pizza };
    });
    await Pizza.insertMany(sampleData);
    console.log(`Data imported`.bgGreen.white);
    process.exit();
  } catch (error) {
    console.log(`error: ${error}`.bgRed.white);
    process.exit(1);
  }
};

const dataDestroy = () => {};
if (process.argv[2] === "-d") {
  dataDestroy();
} else {
  importData();
}
