const bcrypt = require("bcrypt");
const Doctor = require("../Model/Doctor");
const Review = require("../Model/Review");
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

exports.createReview = async (req, res) => {
  const { rating, feedback: reviewText, userId } = req.body;
  const { id } = req.params;

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
