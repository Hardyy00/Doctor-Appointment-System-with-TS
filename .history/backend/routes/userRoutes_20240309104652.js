const express = require("express");
const {
  create,
  createReview,
  getReviews,
} = require("../Controller/UserControllers");

const router = express.Router();

router.post("/create", create);
router.post("/:id/review", createReview);
router.get("/:id/review", getReviews);

module.exports = router;
