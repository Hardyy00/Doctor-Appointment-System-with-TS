const express = require("express");
const router = express.Router();
const { create, createReview } = require("../Controller/DoctorController");
router.post("/create", create);

module.exports = router;
