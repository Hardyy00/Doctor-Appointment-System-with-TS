const bcrypt = require("bcrypt");
const Doctor = require("../Model/Doctor");
const Review = require("../Model/Review");
const Booking = require("../Model/Booking");
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

  try {
    const booking = new Booking({ ticketPrice, user, doctor, appointmentDate });

    await booking.save();

    await Doctor.findByIdAndUpdate(doctor, {
      $push: { appointments: booking._id },
    });

    res.status(200).json({ message: "Successfully Booked the doctor" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAppointments = async (req, res) => {
  const { id } = req.body;

  try {
    const appointments = await Doctor.findById(id)
      .select("appointments")
      .populate("appointments");

    res.status(200).json({ appointments: appointments.appointments });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateDoctor = async (req, res) => {
  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(
      req.body._id,
      req.body,
      {
        new: true,
      }
    );

    const { password, createdAt, updatedAt, ...rest } = updatedDoctor;
    res.status(200).json({ doctor: updatedDoctor });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
