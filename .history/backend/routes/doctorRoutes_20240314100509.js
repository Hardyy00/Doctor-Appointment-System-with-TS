const express = require("express");
const router = express.Router();
const {
  create,
  createAppointment,
  getAppointments,
  updateDoctor,
  login,
} = require("../Controller/DoctorController");

router.get("/get-appointments", getAppointments);
router.post("/create", create);
router.post("/login", login);
router.post("/create-appointment", createAppointment);
router.patch("/update", updateDoctor);

module.exports = router;
