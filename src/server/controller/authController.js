const passport = require("passport");

exports.login = passport.authenticate("local", {
  failureRedirect: "/api",
  successRedirect: "/api",
});

exports.logout = (req, res) => {
  req.logout();
  res.send("you are logout");
};

exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.send("you are not logged in to reach that route");
  }
};
