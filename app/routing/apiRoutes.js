//File that does all the routing for interacting with the api
//Importing exsiting survey data to use later
const breadData = require("../data/breads");
//Actual routing begins now
//When user interacts with the server, perform these functions 
module.exports = function (app) {
  //When user submits a get request, return breadData as JSON;
  app.get("/api/breads", function (req, res) {
    res.json(breadData);
  });
  //When user submits a post request to server, calculate compatible match, return match as modal, and save their data into breads.js
  app.post("/api/breads", function (req, res) {
    //Capturing the user's submitted scores
    let userScores = req.body.scores;
    //Converting the user's array of strings into an array of integers
    let newScores = userScores.map(x => parseInt(x));
    //Logging them to make sure they are received
    console.log("User Score:");
    console.log(newScores);
    //Assigning chosen json to variable to send to user for modal
    let chosenBread;
    //Loop through the breadData array already on server
    breadData.forEach(function(allBread) {
      //Assign the scores array of each index to a variable
      let currentScores = allBread.scores;
      //Log each array to the console
      console.log("Existing Scores:")
      console.log(currentScores);
      //Assign variables to hold the question score of each existing breadData.scores array and the newly received user.scores array
      let exisBread = 0;
      let usrBread = 0;
      //Loop through existing scores to assign a score integer to exisBread
      currentScores.forEach(function (currentBread) {
        exisBread += currentBread;
      });
      //Loop through new user scores to assign score integer to usrBread;
      newScores.forEach(function (userBread) {
        usrBread += userBread;
      });
      //Variable that calculates the difference in scores of the user.scores and each breadData.scores
      let totalDifference = parseInt(Math.abs(exisBread - usrBread));
      allBread.totalDifference = totalDifference;
      console.log("breadData Score: " + parseInt(exisBread));
      console.log("UserData Score: " + parseInt(usrBread));
      console.log("Total Difference: " + parseInt(totalDifference));
      if (allBread.totalDifference <= 4) {
        res.json(allBread);
      } else if (allBread.totalDifference >= 5) {
        res.json(allBread);
      } else {
        res.send("No compatible matches found");
      };
      //Finally checks if user's submitted bread is already in breadData array
      //If not, pushes their object into the array;
      if (!req.body.name === allBread.name) {
        breadData.push(req.body);
      }
    });
  })
}