//npm packages
const express= require("express");
const bodyParser = require("body-parser");
const methodOver = require("method-override");


//the app is using express
const app = express();

//PORT that we are connected to
const PORT = process.env.PORT || 3000;



app.listen(PORT, function(){
  console.log("Listening on PORT: " + PORT);
})
