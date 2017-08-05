// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Create an instance of the express app.
var app = express();

// Specify the port.
var PORT = process.env.PORT || 8080;



app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require("./app/routing/apiRoutes")(app);
require('./app/routing/htmlRoutes.js')(app);

// Initiate the listener:
app.listen(PORT, function() {console.log('listening on port: ' + PORT);
});
