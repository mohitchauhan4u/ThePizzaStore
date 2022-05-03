const mongoose = require("mongoose");
require("colors");

const connectDB = async () => {
  try {
    const url = process.env.MONGO_URI;
    const conn = await mongoose.connect(url, {
      //useUnifiedTopology: true,
      //useNewUrlParser: true,
      //useCreateIndex: true,
      /**
       * useNewUrlParser, useUnifiedTopology,
       *  useFindAndModify, and useCreateIndex
       *  are no longer supported options.
       *  Mongoose 6 always behaves as if
       *  useNewUrlParser, useUnifiedTopology,
       *  and useCreateIndex are true, and
       * useFindAndModify is false. Please
       * remove these options from your code. */
    });
    console.log(
      `MongoDB Database Connected! ${conn.connection.host}`.bgCyan.white
    );
  } catch (error) {
    console.log(`error: ${error.message}`.bgRed.white);
  }
};
module.exports = connectDB;
