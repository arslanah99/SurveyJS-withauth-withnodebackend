// src/components/NavBar.js
import React from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import axios from 'axios';
import { useAuth0 } from "../react-auth0-spa";


const SurveyEx = () => {
  const { loading, user } = useAuth0();

  
    localStorage.setItem('userEmail', user.email)
    // console.log(userEmail)

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


  const sendDataToServer = (survey) => {
    axios.post('http://localhost:5000/doasurvey', {
      data: JSON.stringify(survey.data),
      email: user.email
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div>
      <Survey.Survey json={surveyJSON} onComplete={sendDataToServer} />
    </div>
  );
};

export default SurveyEx;
