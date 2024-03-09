const express = require("express");
const router = express.Router();
const { create, createAppointment } = require("../Controller/DoctorController");

router.post("/create", create);
router.post("/create-appointment", createAppointment);

module.exports = router;
