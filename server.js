var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var root = __dirname;

require('dotenv').config()

var app = express();

mongoose.connect(process.env.MONGO_URI);

//set port
var port = process.env.PORT || 8000


app.use(express.static(path.join(root, 'client')))
app.use(express.static(path.join(root, 'node_modules')))
//app.use(express.static(path.join(root, 'bower_components')))


app.listen(port, function(){
	console.log('listening in port ' + port)
})
