const express = require("express");
const {
  create,
  createReview,
  getReviews,
  getDoctorInformation,
  getDoctors,
} = require("../Controller/UserControllers");

const router = express.Router();

router.post("/create", create);
router.post("/:id/review", createReview);
router.get("/:id/review", getReviews);
router.get("/:id", getDoctorInformation);
router.get("/getDoctors", getDoctors);

module.exports = router;
