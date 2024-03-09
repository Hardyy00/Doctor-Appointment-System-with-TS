const express = require("express");
const {
  create,
  createReview,
  getReviews,
  getDoctorInformation,
  getDoctors,
  updateUser,
} = require("../Controller/UserControllers");

const router = express.Router();

router.get("/getDoctors", getDoctors);
router.post("/create", create);
router.post("/:id/review", createReview);
router.get("/:id/review", getReviews);
router.get("/:id", getDoctorInformation);
router.patch("/update", updateUser);

module.exports = router;
