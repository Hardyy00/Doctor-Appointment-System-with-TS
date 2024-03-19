const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const doctorRoutes = require("./routes/doctorRoutes");
const cors = require("cors");
require("dotenv").config();
const RazorPay = require("razorpay");
// const paymentRoutes = require("./routes/paymentRoutes");
// const { checkout } = require("./Controller/PaymentController");

const instance = new RazorPay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use("/patient", userRoutes);
app.use("/doctor", doctorRoutes);
// app.use("/api", paymentRoutes);

app.route("/api/checkout").post(async (req, res) => {
  const { amount } = req.body;

  const options = {
    amount: +amount,
    currency: "INR",
  };

  const order = await instance.orders.create(options);
  res.status(200).json({ order });
});

app.route("/api/verifyPayment").post((req, res) => {
  console.log(req.body);

  res.status(200).json({ message: "Success" });
});

app.route("/api/getKey").get((req, res) => {
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY });
});

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
