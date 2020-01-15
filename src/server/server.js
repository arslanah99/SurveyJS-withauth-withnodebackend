const express = require("express");
const path = require("path");
var bodyParser = require("body-parser");
var cors = require("cors");


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

let surveys = {};
let currentUser = "";


app.post("/doasurvey", (req, res) => {
    if(req.body.email in surveys){
      surveys[req.body.email].push(JSON.parse(req.body.data))
    } else {
      surveys[req.body.email] = []
      surveys[req.body.email].push(JSON.parse(req.body.data))
    }
  res.end();
});

app.get('/', (req,res) => {
 
  res.send("Hello world")
});


app.get("/:email/surveys", (req, res) => {
  console.log(surveys[req.params.email])
  //if user has not saved a survey then itreturns a empty array
  if(surveys[req.params.email] === undefined){
    res.json([])
  } else {
    res.json(surveys[req.params.email]);
  }
  });

  
const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);
