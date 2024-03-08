const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 8080;

mongoose
  .connect("mongodb+srv://hardik:hardik@cluster0.z7pyfvl.mongodb.net/")
  .then(() => {
    console.log("db connected");
    app.listen(PORT, (err) => {
      if (err) {
        console.log(err);
      }

      console.log(`Server connected at port : ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
