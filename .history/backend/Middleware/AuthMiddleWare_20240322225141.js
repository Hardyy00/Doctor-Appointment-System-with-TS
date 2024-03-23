const Doctor = require("../Model/Doctor");
const User = require("../Model/User");

const jwt = require("jsonwebtoken");

const checkUser = async (req, res, next) => {
  console.log(req.cookies);
  const token = req.cookies.jwt;

  console.log(token);

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        return res.status(400).json({ message: "String didn't match" });
      } else {
        if (decodedToken.role === "doctor") {
          const user = await Doctor.findById(decodedToken.id);

          if (user) {
            return res.status(200).json({ user });
          } else {
            return res.status(400).json({ message: "User was not found" });
          }
        } else {
          const user = await Doctor.findById(decodedToken.id);

          if (user) {
            return res.status(200).json({ user });
          } else {
            return res.status(400).json({ message: "User was not found" });
          }
        }
      }

      next();
    });
  } else {
    return res.status(400).json({ message: "Token is not present" });
  }

  next();
};
module.exports = checkUser;
