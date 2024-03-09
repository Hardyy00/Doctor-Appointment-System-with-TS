const bcrypt = require("bcrypt");
const Doctor = require("../Model/Doctor");
const Review = require('../Model/Review');

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
  const { rating, feedback:reviewText, user } = req.body;
  const {id} = req.params;

  try{

    const doctor = await Doctor.findById(id);

    const review = new Review({})
    
  }
};
