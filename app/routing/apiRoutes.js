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
  app.post("/api/breads", function(req, res) {
    //Current function to try to caluclate the difference between scores
    function diff(a, b) {
      return Math.abs(a - b);
    };
    //Capturing the user's submitted scores
    let userScores = req.body.scores;
    //Converting the user's array of strings into an array of integers
    let newScores = userScores.map(x => parseInt(x));
    //Logging them to make sure they are received
    console.log("User Score");
    console.log(newScores);
    //Loop through the breadData array already on server
    for (let i = 0; i < breadData.length; i++) {
      //Assign the scores array of each index to a variable
      let currentScores = breadData[i].scores
      //Log each array to the console
      for (let j = 0; j < currentScores.length; j++) {
        console.log(currentScores[j]);
        //console.log(newScores.map(x => Math.abs(x - currentScores[j])));
      }
      //Attempt to caluclate the difference between each number in user score and existing score
    };
    //breadData.push(req.body)
  });
}