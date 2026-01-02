const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");

router.get("/", protect, (req, res) => {
  res.json({
    msg: "Tasks route working",
    user: req.user
  });
});

module.exports = router;
