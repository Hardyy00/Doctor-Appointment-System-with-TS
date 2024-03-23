const User = require("../Model/User");

const jwt = require("jsonwebtoken");

const checkUser = async (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    const res = await jwt.verify(token, process.env.JWT_SECRET);
  } else {
    res.status(400).json({ message: "Token is not present" });
  }

  next();
};
module.exports = checkUser;
