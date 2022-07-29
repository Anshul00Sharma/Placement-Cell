// render the sign-up page
// importing user model for Authentication
const User = require("../models/user");
module.exports.signUp = function (req, res) {
  if (req.isAuthenticated()) {
    return res.redirect("/sign-in");
  }

  return res.render("user_sign_up", {
    title: "Placement Cell | Sign Up",
  });
};

// render the sign-in page
module.exports.signIn = function (req, res) {
  if (req.isAuthenticated()) {
    return res.redirect("/");
  }

  return res.render("user_sign_in", {
    title: "Placement Cell | Sign In",
  });
};

// get the sign up data
module.exports.create = function (req, res) {
  // console.log(req.body);
  if (req.body.password != req.body.confirm_password) {
    return res.redirect("back");
  }

  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log("error in finding user in signing up");
      return;
    }
    if (!user) {
      User.create(req.body, function (err, user) {
        if (err) {
          console.log("error in creating user while signing up", err);
          return;
        }
        return res.redirect("/users/sign-in");
      });
    } else {
      return res.redirect("back");
    }
  });
};

// sign in and create a session for user
module.exports.createSession = function (req, res) {
  return res.redirect("/");
};

//  Sign out functionality
module.exports.destroySession = function (req, res) {
  req.logout();

  return res.redirect("/");
};
