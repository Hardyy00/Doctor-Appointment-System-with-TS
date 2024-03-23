const express = require("express");
const {
  create,
  createReview,
  getReviews,
  getDoctorInformation,
  getDoctors,
  updateUser,
  login,
  getAppointments,
} = require("../Controller/UserControllers");
const checkUser = require("../Middleware/AuthMiddleWare");

const router = express.Router();

router.get('/patient', checkUser){}
router.get("/getDoctors", getDoctors);
router.get("/get-appointments/:id", getAppointments);
router.post("/create", create);
router.post("/login", login);
router.post("/:id/review", createReview);
router.get("/:id/review", getReviews);
router.get("/:id", getDoctorInformation);
router.patch("/update", updateUser);

module.exports = router;
