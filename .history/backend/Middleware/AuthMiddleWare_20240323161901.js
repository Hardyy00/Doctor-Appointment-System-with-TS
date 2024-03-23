const Doctor = require("../Model/Doctor");
const User = require("../Model/User");

const jwt = require("jsonwebtoken");
const { maxAge } = require("../Controller/UserControllers");

const checkUser = async (req, res) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        res.status(400).json({ message: "String didn't match" });
      } else {
        if (decodedToken.role === "doctor") {
          const user = await Doctor.findById(decodedToken.id);

          if (user) {
            res.cooke("jwt", token, {
              withCredentials: true,
              httpOnly: false,
              maxAge: maxAge * 1000,
            });
            res.status(200).json({ user });
          } else {
            res.status(400).json({ message: "User was not found" });
          }
        } else {
          const user = await User.findById(decodedToken.id);

          if (user) {
            res.cookie("jwt", token, {
              withCredentials: true,
              httpOnly: false,
              maxAge: maxAge * 1000,
            });
            res.status(200).json({ user });
          } else {
            res.status(400).json({ message: "User was not found" });
          }
        }
      }
    });
  } else {
    res.status(400).json({ message: "Token is not present" });
  }
};
module.exports = checkUser;
