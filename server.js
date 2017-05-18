var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');
var flash = require('connect-flash');
var cookieParser = require('cookie-parser');
require('dotenv').config();

var index = require('./routes/index');
var rideRequests = require('./routes/rideRequests');
var users = require('./routes/users.js');

var passportConfig = require('./config/passport')(passport);

var port = process.env.PORT || 8080;

var app = express();

// View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set static folder
app.use(express.static(path.join(__dirname, 'client')));

// Set up middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(flash());

app.use(session({
    secret: 'krew test',
    resave: true,
    saveUninitialized: true
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

app.use('/', index);
app.use('/api', rideRequests);
app.use('/auth', users);

app.listen(port, () => {
    console.log("Server started on port " + port);
});

module.exports = app;