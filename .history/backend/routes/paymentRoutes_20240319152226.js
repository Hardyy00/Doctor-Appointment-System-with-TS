const express = require("express");
const router = express.Router();
const { checkout } = require("../Controller/PaymentControllor");

router.route("/checkout", (req, res) => {});
module.exports = router;
