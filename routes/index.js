var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://root:admin@ds161630.mlab.com:61630/krew_dev', ['users']);

router.get('/', (req, res, next) => {
    res.render('index.html');
});

router.post('/profile/:id', isAuthenticated, (req, res, next) => {
    db.users.findOne({ _id: mongojs.ObjectId(req.params.id)}, (err, user) => {
        if (err) {
            res.send(err);
        } else {
            res.json(user);
        }
    });
});

function isAuthenticated(req, res, next) {
    console.log(req.user);
    if (req.user.authenticated) {
        return next();
    }
    res.send("No!!");
}

module.exports = router;