//File that runs the server via the express module
//Importing express module
const express = require("express");
const path = require("path");
//Assign variable to express method for server creation
const app = express();
//Assing server to a port
const PORT = process.env.PORT || 4500;
//Set up express to handle the parsing of data
app.use(express.urlencoded({extended: true}));
app.use(express.json());
//Importing the routing for the server so it can navigate user
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
//Adding a listener to start server and allow routing to function properly
app.listen(PORT, function() {
    console.log("Server listening on PORT: " + PORT);
})