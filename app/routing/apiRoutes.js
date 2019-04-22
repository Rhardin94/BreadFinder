//File that does all the routing for interacting with the api
//Importing exsiting survey data to use later
const breadData = require("../data/breads");
//Actual routing begins now
//When user interacts with the server, perform these functions 
module.exports = function (app) {
  //When user submits a get request, return breadData as JSON;
  app.get("/api/breads", function(req, res) {
    res.json(breadData);
  });
  //When user submits a post request to server, calculate compatible match, return match as modal, and save their data into breads.js
  app.post("/api/breads"), function(req, res) {
    let newScores;
    newScores.push(req.body.scores);
    console.log(newScores);
    function diff(a, b) {
      return Math.abs(a - b);
    };
    for (let i = 0; i < breadData.length; i++) {
      let currentScores = breadData[i].scores
      console.log(diff(newScores, currentScores));
    };
    //breadData.push(req.body)
  };
}