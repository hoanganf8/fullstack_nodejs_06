const express = require("express");
const router = express.Router();

router.get("/users", (req, res) => {
  res.json({ status: "success" });
});

module.exports = router;
