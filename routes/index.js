// importing express
const express = require("express");
//  passport for checking authentication
const passport = require("passport");
// intitialize router
const router = express.Router();
const homeController = require("../controllers/home_controller");

console.log("Router Loaded");

// all the rotes for placement cell app
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
router.use("/job", passport.checkAuthentication, require("./job"));

module.exports = router;
