const Doctor = require("../Model/Doctor");
const User = require("../Model/User");

const jwt = require("jsonwebtoken");

const checkUser = async (req, res, next) => {
  console.log("called  : ", req.cookies);
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        res.status(400).json({ message: "String didn't match" });
      } else {
        if (decodedToken.role === "doctor") {
          const user = await Doctor.findById(decodedToken.id);

          if (user) {
            res.status(200).json({ user });
          } else {
            res.status(400).json({ message: "User was not found" });
          }
        } else {
          const user = await User.findById(decodedToken.id);

          if (user) {
            res.status(200).json({ user });
          } else {
            res.status(400).json({ message: "User was not found" });
          }
        }
      }

      next();
    });
  } else {
    res.status(400).json({ message: "Token is not present" });
  }

  next();
};
module.exports = checkUser;
