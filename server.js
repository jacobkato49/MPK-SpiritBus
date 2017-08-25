//npm packages
const express= require("express");
const bodyParser = require("body-parser");
const methodOver = require("method-override");
const expressHandle = require("express-handlebars");
const expressSess = require("express-session");
const mysql = require("mysql");

const fs = require("fs");

//use the models
const db= require("./models");

//the app is using express
const app = express();

//PORT that we are connected to
const PORT = process.env.PORT || 3000;

//express static uses files (css,js,images)
app.use(express.static("./public"));

//bodyParser - parsing responses (middleware)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));


//method-override area
app.use(methodOver("_method")); // override with POST having ?_method=DELETE

//express handlebars area
app.engine("handlebars", expressHandle({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//controllers
app.use("/", require("./controllers/bus_controller"));




//syncing the models to sequelize
db.sequelize.sync({force: true}).then(function() {
  //listening to this port when we spin up the server
  app.listen(PORT, function(){
    console.log("Listening on PORT: " + PORT);
  })
})
