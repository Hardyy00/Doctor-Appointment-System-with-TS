const bcrypt = require("bcrypt");
const Doctor = require("../Model/Doctor");
const Review = require("../Model/Review");
const Booking = require('../Model/Booking');
const mongoose = require("mongoose");

const saltRounds = 10;
exports.create = async (req, res) => {
  const { name, email, image, gender, password } = req.body;

  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newDoctor = new Doctor({
      name,
      email,
      image,
      gender,
      password: hashedPassword,
    });

    const ans = await newDoctor.save();

    res.status(200).json({ message: "Doctor created Successfully!" });
  } catch (err) {
    res.status(400).status({ message: err.message });
  }
};

exports.createAppointment = async (req, res) => {
  const { ticketPrice, user, doctor, appointmentDate } = req.body;

  try{

    const booking = new Booking({ticketPrice, user, doctor, appointmentDate});

    await booking.save();
    
    const doctorObj = await Doctor.findByIdAndUpdate(doctor, {$push : {appointments : booking._id}});

    res.status(200).json({message : "Successfully Booked the doctor"});

  }
};
