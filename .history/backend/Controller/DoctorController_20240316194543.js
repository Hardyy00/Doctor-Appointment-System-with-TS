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

    await newDoctor.save();

    res.status(200).json({ user: newDoctor });
  } catch (err) {
    res.status(400).status({ message: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const doctor = await Doctor.findOne({ email });

    if (!doctor) {
      return res.status(402).json({ message: "No Such Account was Found" });
    }

    const comp = await bcrypt.compare(password, doctor.password);

    if (comp) {
      res.status(200).json({ user: doctor });
    } else {
      res.status(400).json({ message: "Wrong Password" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createAppointment = async (req, res) => {
  const { ticketPrice, user, doctor, appointmentDate } = req.body;

  try {
    const booking = new Booking({ ticketPrice, user, doctor, appointmentDate });

    await booking.save();

    res.status(200).json({ message: "Appointment Booked Successfully!" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAppointments = async (req, res) => {
  const { id } = req.params;

  try {
    let appointments = await Booking.find({
      doctor: new mongoose.Types.ObjectId(id),
    }).populate("user");

    appointments = appointments.map((item) => {
      const restBook = item._doc;

      const user = restBook.user;

      delete restBook.user;

      const { password, createdAt, updatedAt, ...restUser } = user._doc;

      restBook.user = restUser;

      return restBook;
    });

    res.status(200).json({ appointments });
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

    const { password, createdAt, updatedAt, ...rest } = updatedDoctor._doc;
    res.status(200).json({ user: rest });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
