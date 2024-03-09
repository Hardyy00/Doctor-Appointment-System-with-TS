const express = require("express");
const router = express.Router();
const { create, createReview } = require("../Controller/DoctorController");
router.post("/create", create);

router.post("/:id/review", createReview);

module.exports = router;
