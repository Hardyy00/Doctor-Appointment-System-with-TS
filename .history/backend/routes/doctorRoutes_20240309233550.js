const express = require("express");
const router = express.Router();
const {
  create,
  createAppointment,
  getAppointments,
} = require("../Controller/DoctorController");

router.get("/get-appointments", getAppointments);
router.post("/create", create);
router.post("/create-appointment", createAppointment);

module.exports = router;
