const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 8080;
require("dotenv").config();

express.urlencoded({ extended: false });
express.mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("db connected");
    app.listen(process.env.PORT, (err) => {
      if (err) {
        console.log(err);
      }

      console.log(`Server connected at port : ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
