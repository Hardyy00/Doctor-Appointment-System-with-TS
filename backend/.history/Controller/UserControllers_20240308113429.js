const bcrypt = require("bcrypt");
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

    res.status(200).json({ message: "User created" });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
