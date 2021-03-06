var express = require("express");
var path= require("path")

var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 3001;

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/public",express.static(path.join(__dirname, 'public'))); 

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});