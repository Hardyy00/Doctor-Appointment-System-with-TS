const User = require("../Model/User");

const jwt = require("jsonwebtoken");

const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
  } else {
    res.json({});
  }
};
module.exports = checkUser;
