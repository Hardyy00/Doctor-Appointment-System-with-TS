const express = require("express");
const { create } = require("../Controller/UserControllers");

const router = express.Router();

router.get("/ok", (req, res) => {
  res.json({ message: "Hii" });
});
router.post("/create", create);

module.exports = router;
