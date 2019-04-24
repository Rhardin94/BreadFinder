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
    //Current function to try to caluclate the difference between scores
    function diff(a, b) {
      return Math.abs(a - b);
    };
    //Capturing the user's submitted scores
    let userScores = req.body.scores;
    //Converting the user's array of strings into an array of integers
    let newScores = userScores.map(x => parseInt(x));
    let totalDifference;
    //Logging them to make sure they are received
    console.log("User Score");
    console.log(newScores);
    let arrayIWant = [];
    //Loop through the breadData array already on server
    breadData.forEach(function (bread) {
      //Assign the scores array of each index to a variable
      let currentScores = bread.scores
      //Log each array to the console
      console.log(currentScores);
      let exisBread = 0;
      let usrBread = 0;
      currentScores.forEach(function(currentBread) {
        exisBread += currentBread;
      });
      newScores.forEach(function(userBread) {
        //arrayIWant.push(Math.abs(ele - moreBread));
        usrBread += userBread;
      });
      console.log("breadData " + parseInt(exisBread));
      console.log("UserData " + parseInt(usrBread));
      console.log("Total Difference " + parseInt(Math.abs(exisBread - usrBread)));
      //console.log(totalDifference)
      //console.log(arrayIWant);
      //breadData.push(req.body)
    });
  })
}