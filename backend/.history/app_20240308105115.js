const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 8080;
require("dotenv").config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
mongoose
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
