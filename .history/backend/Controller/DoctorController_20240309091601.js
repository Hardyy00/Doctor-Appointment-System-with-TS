const bcrypt = require("bcrypt");
const Doctor = require("../Model/Doctor");

const saltRounds = 10;
exports.create = async (req, res) => {
  const { name, email, image, gender, password } = req.body;

  console.log(name, email, image, gender, password);

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

    res.status(200).json({ message: "Doctor created Successfully!" });
  } catch (err) {
    res.status(400).status({ message: err.message });
  }
};
