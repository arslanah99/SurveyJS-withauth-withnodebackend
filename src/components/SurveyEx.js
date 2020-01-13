// src/components/NavBar.js
import React from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";

const SurveyEx = () => {
  var surveyJSON = {
    pages: [
      {
        name: "page2",
        elements: [
          {
            type: "rating",
            name: "question2",
            title: "Whats the biggest number here?"
          },
          {
            type: "rating",
            name: "question3",
            title: "Whats the  smallest number here?"
          },
          {
            type: "rating",
            name: "question4",
            title: "Whats the most middle number?"
          }
        ]
      }
    ]
  };

  function sendDataToServer(survey) {
    //send Ajax request to your web server.
    alert("The results are:" + JSON.stringify(survey.data));
  }

  return (
    <div>
      <Survey.Survey json={surveyJSON} onComplete={sendDataToServer} />
    </div>
  );
};

export default SurveyEx;
