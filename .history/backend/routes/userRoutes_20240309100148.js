const express = require("express");
const { create, createReview } = require("../Controller/UserControllers");

const router = express.Router();

router.post("/create", create);
router.post("/:id/review", createReview);

module.exports = router;
