var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs(process.env.MONGO_URI, ['users']);
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
    var user = req.user;
    var sessionID = req.sessionID;
    var response = { "user": req.user, "sessionID": req.sessionID }
    console.log(req);
    console.log(req.session);
    res.json(response);
});

router.get('/loginFailure', (req, res, next) => {
    res.json(req.user);
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

// Get a specific user by ID
router.get('/user/:id', (req, res, next) => {
    db.users.get({ _id: mongojs.ObjectId(req.params.id)}, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
});

module.exports = router;