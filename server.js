// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
require('./app/routing/htmlRoutes')(app);
// Create an instance of the express app.
var app = express();

// Specify the port.
var port = 3000;

// Initiate the listener:
app.listen(port);

app.use(bodyParser.urlencoded({extended: false }));

app.use(bodyParser.json());
