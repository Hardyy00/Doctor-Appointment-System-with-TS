const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const doctorRoutes = require("./routes/doctorRoutes");
require("dotenv").config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("patient", userRoutes);
app.use("doctor", doctorRoutes);

mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("db connected");
    app.listen(process.env.PORT, (err) => {
      if (err) {
        console.log(err);
      }

      console.log(`Server connected at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
