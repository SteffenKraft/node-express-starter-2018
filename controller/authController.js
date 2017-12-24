const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.login = passport.authenticate(
    'local',
    {
        failureRedirect: '/api',
        successRedirect: '/api',
    }
);

exports.logout = (req, res) => {
    req.logout();
    res.send('you are logout');
}

exports.isLoggedIn = (req, res, next) => {
    if(req.isAuthenticated()) {
        next();
        return;
    } else {
        res.send('you are not logged in to reach that route');
    }
}
