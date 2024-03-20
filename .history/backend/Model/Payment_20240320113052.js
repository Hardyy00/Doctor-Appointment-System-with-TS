const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  paymentId: {
    type: String,
    required: true,
  },
  orderId: {
    type: String,
    required: true,
  },
  doctorId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
