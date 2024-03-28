const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const doctorRoutes = require("./routes/doctorRoutes");
const cors = require("cors");
require("dotenv").config();
const RazorPay = require("razorpay");
const crypto = require("crypto");
const Payment = require("./Model/Payment");
const cookieParser = require("cookie-parser");
const checkUser = require("./Middleware/AuthMiddleWare");

// const paymentRoutes = require("./routes/paymentRoutes");
// const { checkout } = require("./Controller/PaymentController");

const instance = new RazorPay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", checkUser);
app.use("/patient", userRoutes);
app.use("/doctor", doctorRoutes);
// app.use("/api", paymentRoutes);

app.route("/api/checkout").post(async (req, res) => {
  try {
    const { ticketPrice: amount } = req.body;

    const options = {
      amount: +amount,
      currency: "INR",
    };

    const order = await instance.orders.create(options);
    res.status(200).json({ order });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.route("/api/verifyPayment").post((req, res) => {
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
    req.body;

  const hmac = crypto.createHmac("sha256", process.env.RAZORPAY_API_SECRET);
  hmac.update(razorpay_order_id + "|" + razorpay_payment_id);

  const signature = hmac.digest("hex");

  const isAuthentic = signature === razorpay_signature;
  if (isAuthentic) {
    return res.status(200).json({ success: true });
  } else {
    res.status(402).json({ success: false, message: "Payment Failed" });
  }
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
