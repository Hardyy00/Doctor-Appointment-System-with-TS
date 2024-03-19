const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const doctorRoutes = require("./routes/doctorRoutes");
const cors = require("cors");
require("dotenv").config();
const RazorPay = require("razorpay");
const paymentRoutes = require("./routes/paymentRoutes");

const instance = new RazorPay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

module.exports = { instacne, app };

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use("/patient", userRoutes);
app.use("/doctor", doctorRoutes);
app.use("/api", paymentRoutes);

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
