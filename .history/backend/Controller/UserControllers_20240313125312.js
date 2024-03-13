const bcrypt = require("bcrypt");
const Doctor = require("../Model/Doctor");
const Review = require("../Model/Review");
const mongoose = require("mongoose");
const User = require("../Model/User");

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
  const { email, password, role } = req.body;

  try {
    const user = await User.findOne({ email });

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

    await review.save();

    await doctor.updateOne({ $push: { reviews: review._id } });

    res.status(200).json({ message: "Review Added successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getReviews = async (req, res) => {
  const { id } = req.params;

  try {
    const doctor = await Doctor.findById(id)
      .select("reviews")
      .populate("reviews");

    console.log(doctor);

    res.status(200).json({ reviews: doctor.reviews });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getDoctorInformation = async (req, res) => {
  const { id } = req.params;

  try {
    const doctor = await Doctor.findById(id).select("-reviews");

    const { password, createdAt, updatedAt, ...restDoctor } = doctor._doc; // leave out the password, and rest unnecessary fields

    res.status(200).json({ doctor: restDoctor });
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

    console.log(foundDoctors);

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
