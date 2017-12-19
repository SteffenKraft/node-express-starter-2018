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

exports.logout = (req, res) => {
    req.logout();
    res.send('you are logout');
}
