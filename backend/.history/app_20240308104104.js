const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 8080;

mongoose
  .connect("mongodb+srv://hardik:hardik@cluster0.z7pyfvl.mongodb.net/")
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }

  console.log(`Server connected at port : ${PORT}`);
});
