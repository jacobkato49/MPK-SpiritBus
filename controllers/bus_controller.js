//requiring packages
const express = require("express");
const methodOver = require("method-override");
const bodyParser = require("body-parser");



//
var router = express.Router();

//models
var db = require("../models");

//router.use(express.static(path.join(__dirname, 'public')));

//Redirects to the URL derived from the specified path
router.get("/", function(req,res){
  res.redirect(302, "/mpkbus");
})


//GET--> information for all routes
router.get("/mpkbus:", function(req,res){
  //find me all the routes
  db.mpkBus.findAll({
    where: {
      agency_id: 509
    }
  }).then(busRoutes => {
    // log to console
    console.log(busRoutes);
    // deploy to map (add routes visually to Google Map)
    var newVariable = { }
  })

});


//ASK CHARLIE or TYLER if I need a POST route for the app
// I think we're going to need a POST route. I'll work on it - Dan



//PUT-->CREATE and UPDATE
  /*bus info requested*/
// router.put("mpkbus/update/request/:id", function(req,res){






  /*update request on info*/
// router.put("mpkbus/update/return/:id", function(req,res){





//delete would go here



//export
module.exports = router;
