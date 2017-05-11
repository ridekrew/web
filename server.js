var express = require('express');
var path = require('path');
var root = __dirname;

var app = express();

//set port
var port = process.env.PORT || 8000


app.use(express.static(path.join(root, 'client')))
app.use(express.static(path.join(root, 'node_modules')))
app.use(express.static(path.join(root, 'bower_components')))


app.listen(port, function(){
	console.log('listening in port 8000')
})
