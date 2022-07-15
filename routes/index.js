// importing express
const express = require("express");
const passport = require("passport");
// intitialize router
const router = express.Router();
const homeController = require("../controllers/home_controller");

console.log("Router Loaded");

router.get("/", homeController.home);
router.use("/users", require("./users"));
router.use("/csv", passport.checkAuthentication, require("./csv"));
router.use(
  "/interviews",
  passport.checkAuthentication,
  require("./interviews")
);
router.use("/students", passport.checkAuthentication, require("./students"));
router.use(
  "/scheduling",
  passport.checkAuthentication,
  require("./interviewSchedules")
);

module.exports = router;
