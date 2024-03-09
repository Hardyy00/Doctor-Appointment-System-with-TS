const express = require("express");
const { create } = require("../Controller/UserControllers");

const router = express.Router();

router.post("/create", createImageBitmap);

module.exports = router;
