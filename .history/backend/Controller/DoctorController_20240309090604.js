const bcrypt = require("bcrypt");

const saltRounds = 10;
exports.create = async (req, res) => {
  const { name, email, image, gender, password } = req.body;

  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
  } catch (err) {
    res.status(400).status({ message: err.message });
  }
};
