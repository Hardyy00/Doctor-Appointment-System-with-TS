const bcrypt = require("bcrypt");
const Doctor = require("../Model/Doctor");
const Review = require("../Model/Review");
const mongoose = require("mongoose");
const User = require("../Model/User");
const Booking = require("../Model/Booking");

const saltRounds = 10;
exports.create = async (req, res) => {
  const { name, email, password, role, gender, image } = req.body;

  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
      gender,
      image,
    });

    await newUser.save();

    res.status(200).json({ user: newUser });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(402).json({ message: "No Such User found" });
    }

    const comp = await bcrypt.compare(password, user.password);

    if (comp) {
      res.status(200).json({ user });
    } else {
      res.status(400).json({ message: "Password or Email is incorrect" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createReview = async (req, res) => {
  let { rating, feedback: reviewText, userId } = req.body;
  const { id } = req.params;

  rating = +rating;

  try {
    const doctor = await Doctor.findById(id);

    let review = new Review({
      user: new mongoose.Types.ObjectId(userId),
      doctor: new mongoose.Types.ObjectId(id),
      reviewText,
      rating,
    });

    const ratedUsers = doctor.ratedNumber + 1;
    const totalRating = doctor.totalRating + rating;

    await doctor.updateOne({ $set: { ratedUsers, totalRating } });

    await review.save();

    const populatedReview = await review.populate("user");

    res.status(200).json({
      review: {
        id: populatedReview._id,
        user: populatedReview.user,
        reviewText: populatedReview.reviewText,
        createdAt: populatedReview.createdAt,
      },
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getReviews = async (req, res) => {
  const { id } = req.params;

  try {
    const reviews = await Review.find({
      doctor: new mongoose.Types.ObjectId(id),
    })
      .populate("user")
      .select("_id user reviewText rating createdAt");

    res.status(200).json({ reviews });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getDoctorInformation = async (req, res) => {
  const { id } = req.params;
  const { user } = req.query;

  console.log(user);
  try {
    const doctor = await Doctor.findById(id).select("-reviews");

    const { password, createdAt, updatedAt, ...restDoctor } = doctor._doc; // leave out the password, and rest unnecessary fields

    const appoint = await Booking.findOne({
      user,
      doctor: id,
      isCompleted: false,
    });

    res.status(200).json({ doctor: restDoctor, isBooked: appoint != null });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getDoctors = async (req, res) => {
  let { search: name } = req.query;

  name = name.toLowerCase().trim();

  try {
    const doctors = await Doctor.find().select(
      "name image hospital specialization averageRating"
    );

    if (name === "*") {
      return res.status(200).json({ doctors: foundDoctors });
    }

    const foundDoctors = doctors.filter((item) =>
      item.name.toLowerCase().includes(name)
    );

    res.status(200).json({ doctors: foundDoctors });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateUser = async (req, res) => {
  const { _id } = req.body;

  try {
    // console.log(_id);
    const user = await User.findByIdAndUpdate(_id, req.body, { new: true });

    res.status(200).json({ user });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAppointments = async (req, res) => {
  const { id } = req.params;

  try {
    let booking = await Booking.find({
      user: new mongoose.Types.ObjectId(id),
      isCompleted: false,
    }).populate("doctor");

    res.status(200).json({ appointments: booking });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
