const express = require("express");
const { create } = require("../Controller/UserControllers");

const router = express.Router();

router.post("/create", create);

module.exports = router;
