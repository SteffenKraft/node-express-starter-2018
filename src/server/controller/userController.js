/* eslint-disable no-underscore-dangle */

const mongoose = require("mongoose");
const promisify = require("es6-promisify");
const mail = require("../handlers/mail");

const User = mongoose.model("User");

exports.validateRegister = (req, res, next) => {
  req.sanitizeBody("name");
  req.checkBody("name", "You must supply a name!").notEmpty();
  req.checkBody("email", "That Email is not valid!").isEmail();
  req.checkBody("password", "Password Cannot be Blank!").notEmpty();
  req
    .checkBody("password-confirm", "Confirmed Password cannot be blank!")
    .notEmpty();
  req
    .checkBody("password-confirm", "Oops! Your passwords do not match")
    .equals(req.body.password);

  const errors = req.validationErrors();
  if (errors) {
    res.json({ errors, reqBody: req.body });
    return;
  }
  next();
};

exports.register = async (req, res, next) => {
  const user = new User({ email: req.body.email, name: req.body.name });
  const register = promisify(User.register, User);
  await register(user, req.body.password);
  // sending a welcome mail check ../handlers/mail.js for configuration and usage
  await mail.send({
    user,
    filename: "welcome-content",
    subject: "welcome to node-starter-2018",
    testURL: "http://test.de",
  });
  next(); // pass to authController.login
};

exports.user = (req, res) => {
  res.json({ user: req.user, avatar: req.user.gravatar });
};

exports.updateUser = async (req, res) => {
  const updates = {
    name: req.body.name,
    email: req.body.email,
  };

  const user = await User.findOneAndUpdate(
    { _id: req.user._id },
    { $set: updates },
    { new: true, runValidators: true, context: "query" },
  );

  res.json(user);
};
