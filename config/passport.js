var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongojs = require('mongojs');
var db = mongojs('mongodb://root:admin@ds161630.mlab.com:61630/krew_dev', ['users']);
var bcrypt = require('bcrypt');

module.exports = function(passport) {
    passport.serializeUser((user, done) => {
        done(null, user._id);
    });

    passport.deserializeUser((id, done) => {
        db.users.find({ _id: mongojs.ObjectId(id)}, (err, user) => {
            done(err, user);
        });
    });

    passport.use('local-login', new LocalStrategy({
        usernameField: 'email'
        },
        function(email, password, done) {
            process.nextTick(() => {
                db.users.findOne({ email: email }, (err, user) => {
                    if (err) { return done(err) }
                    if (!user) {
                        console.log("Login failed: User doesn't exist.");
                        return done(null, false, { 'message': 'Incorrect username.' });
                    }
                    if (!bcrypt.compareSync(password, user.password)) {
                        console.log("Login failed: Password incorrect.");
                        return done(null, false, { 'message': 'Incorrect password.'});
                    }
                    console.log("Login successful.");
                    return done(null, user);
                });
            });
        }
    ));

    passport.use('local-register', new LocalStrategy({
        usernameField: 'email',
        passReqToCallback: true
        },
        function(req, email, password, done) {
            process.nextTick(() => {
                db.users.findOne({ email: email }, (err, user) => {
                    if (err) { return done(err); }
                    if (user) {
                        console.log("Registration failed: User already exists.")
                        return done(null, false);
                    }
                    var newUser = req.body;
                    newUser.password = bcrypt.hashSync(newUser.password, bcrypt.genSaltSync(10));
                    db.users.save(newUser, (err, newUser) => {
                        if (err) throw err;
                        console.log("Registration successful.");
                        return done(null, newUser);
                    });
                });
            });
        }
    ));
}