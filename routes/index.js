const express = require("express");
const middleware = require("../middlewares");
const auth = require("./auth");
const home = require("./home");
const user = require("./user");
const router = express.Router();

router.use("/", home);
router.use("/auth", auth);
router.use("/user", user);

module.exports = router;
