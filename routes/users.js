// importing express for router
const express = require("express");
const router = express.Router();

// importing user controller
const userController = require("../controllers/user_controller");
// importing passport for checking authentication
const passport = require("../config/passport-local-strategy");

router.get("/sign-in", userController.signIn);
router.get("/sign-up", userController.signUp);
router.post("/create", userController.create);

// use passpost as a middlewear to authenticate
router.post(
  "/create-session",
  passport.authenticate("local", { failureRedirect: "/users/sign-in" }),
  userController.createSession
);
router.get("/sign-out", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

// exporting router
module.exports = router;
