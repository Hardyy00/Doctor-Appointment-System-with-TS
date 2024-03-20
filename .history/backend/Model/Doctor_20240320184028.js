const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
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

    hospital: {
      type: String,
    },

    gender: {
      type: String,
      enum: ["male", "female", "other"],
    },

    phone: {
      type: Number,
    },

    image: {
      type: String,
    },

    ticketPrice: {
      type: Number,
    },

    role: {
      type: String,
    },

    // fields for doctor only

    specialization: {
      type: String,
    },

    education: {
      type: Array,
    },

    experience: {
      type: Array,
    },

    bio: {
      type: String,
      maxLength: 50,
    },

    about: {
      type: String,
    },

    timeSlots: {
      type: Array,
    },

    averageRating: {
      type: Number,
      default: 0,
    },

    totalRating: {
      type: Number,
      default: 0,
    },

    ratedNumber: {
      type: number,
      default: 0,
    },

    isApproved: {
      type: String,
      enum: ["pending", "approved", "cancelled"],
      default: "pending",
    },

    totalPatients: Number,
  },
  { timestamps: true }
);

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
