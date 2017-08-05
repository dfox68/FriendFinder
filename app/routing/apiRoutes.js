// var app = express();
// var path = require("path");
// var express = require("express");
var friends = require('../data/friends');

module.exports = function(app) {

  app.get("/api/friends", function (request, response)  {
  console.log( '---===response===---', response );
    response.json(friends);
  });

  app.post("/api/friends", function(request, response) {
    // TODO: create a best match variable

    // TODO: figure out what the request.body looks like

    //TODO: calcuate the difference in scores from the database

    //TODO: save user information to array
    
    //TODO: return json with users best match to be used on html page
  });
};
