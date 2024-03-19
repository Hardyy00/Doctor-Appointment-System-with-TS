const express = require("express");
const router = express.Router();
const { checkout } = require("../Controller/PaymentController");

router.route("/checkout").post(checkout);
module.exports = router;
