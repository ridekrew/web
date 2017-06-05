var express = require('express');
var stripe = require('stripe')('sk_live_xzZpoV0uUICrcg79YFg3NtGj');
var bp = require('body-parser');

var path = require('path');
var root = __dirname;

var app = express();

//set port
var port = process.env.PORT || 8000


app.use(express.static(path.join(root, 'client')))
app.use(express.static(path.join(root, 'node_modules')))
app.use(bp.json());
app.use(bp.urlencoded( {extended: false}));


app.listen(port, function(){
	console.log('listening in port 8000')
})
