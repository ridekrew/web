var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://root:admin@ds161630.mlab.com:61630/krew_dev', ['users']);
var bcrypt = require('bcrypt');
var passport = require('passport');

router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/auth/loginSuccess',
    failureRedirect: '/auth/loginFailure' 
}));

router.post('/register', passport.authenticate('local-register', {
    successRedirect: '/auth/loginSuccess',
    failureRedirect: '/auth/loginFailure'
}));

router.get('/loginSuccess', (req, res, next) => {
    console.log("Login successful.");
    res.send("Login successful");
});

router.get('/loginFailure', (req, res, next) => {
    res.send("Login failed");
});

router.get('/logout', (req, res) => {
    if (req.user) {
        req.logout();
        console.log("Logout successful.");
        res.send("Logout successful.");
    } else {
        console.log("Logout failed: Not currently logged in.");
        res.send("Logout failed: Not currently logged in.");
    }
});

// Get all users
router.get('/users', (req, res, next) => {
    db.users.find((err, users) => {
        if (err) {
            res.send(err);
        } else {
            res.json(users);
        }
    });
});

module.exports = router;