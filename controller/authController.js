const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.login = passport.authenticate(
    'local',
    {
        failureRedirect: '/login',
        successRedirect: '/',
    }
);
