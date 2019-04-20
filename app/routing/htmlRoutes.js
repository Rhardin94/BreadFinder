//File that does all the routing when use is navigating html
const path = require("path");
module.exports = function (app) {
  //Routes user to home if path = "/home"
  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  })
  //Routes user to survey page if path equals "/survey"
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  //Routes user to home page if no matching path
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
}