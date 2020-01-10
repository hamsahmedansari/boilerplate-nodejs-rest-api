const express = require("express");
const { Validator } = require("../middlewares");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("index", { title: "I am protected" });
});
router.get(
  "/:id",
  [
    Validator.body("email")
      .isEmail()
      .normalizeEmail()
  ],
  Validator,
  (req, res, next) => {
    res.render("index", { title: "I am protected" });
  }
);

module.exports = router;
