const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  phone: Number,
  photo: String,

  role: {
    type: String,
    enum: ["patient", "admin"],
    default: "patient",
  },

  gender: {
    type: String,
    enum: ["male", "female", "other"],
  },

  bloodType: String,

  appointments: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Booking",
    },
  ],
});
