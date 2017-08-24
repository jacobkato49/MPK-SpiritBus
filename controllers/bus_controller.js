//requiring packages
const express = require("express");
const methodOver = require("method-override");
const bodyParser = require("body-parser");



//
var router = express.Router();

//models
var db= require("../models");

//Redirects to the URL derived from the specified path
router.get("/", function(req,res){
  res.redirect(302, "/mpkbus");
})


//GET--> information for all routes
router.get("/mpkbus:", function(req,res){
  //find me all the routes
  db.mpkBus.findAll({
    where: {
      status: {
        $not: false,
      }
    }
  })

});


//ASK CHARLIE or TYLER if I need a POST route for the app



//PUT-->CREATE and UPDATE
  /*bus info requested*/
// router.put("mpkbus/update/request/:id", function(req,res){


})



  /*update request on info*/
// router.put("mpkbus/update/return/:id", function(req,res){


})


//delete would go here



//export
module.exports= router;
