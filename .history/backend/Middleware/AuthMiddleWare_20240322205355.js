const User = require("../Model/User");

const jwt = require("jsonwebtoken");

const checkUser = async (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        res.status(400).json({ message: "String didn't match" });
      } else {

        const user = await User.findById()
      }

      next();
    });
  } else {
    res.status(400).json({ message: "Token is not present" });
  }

  next();
};
module.exports = checkUser;
