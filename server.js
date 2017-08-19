//npm packages
const express= require("express");
const bodyParser = require("body-parser");
const methodOver = require("method-override");
const expressHandle = require("express-handlebars");
const expressSess = require("express-session")


//use the models
const db= require("./models");

//the app is using express
const app = express();

//PORT that we are connected to
const PORT = process.env.PORT || 3000;



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



//syncing the models to sequelize
db.sequelize.sync({}).then(function() {
  //listening to this port when we spin up the server
  app.listen(PORT, function(){
    console.log("Listening on PORT: " + PORT);
  })
})
