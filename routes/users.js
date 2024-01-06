const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/cool", function (req, res, next) {
  res.send("You're so cool");
});

router.get("/bad", function (req, res, next) {
  res.send("You're so bad");
});

module.exports = router;
