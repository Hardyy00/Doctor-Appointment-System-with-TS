const User = require("../Model/User");

const jwt = require("jsonwebtoken");

const checkUser = (req, res, next) => {
  const token = req.cookie;
};
module.exports = checkUser;
