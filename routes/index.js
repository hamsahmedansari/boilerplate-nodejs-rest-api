const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("index", { title: "Welcome To Boiler Plate of Note JS" });
});

module.exports = router;
