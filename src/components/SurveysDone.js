// src/components/Profile.js

import React, {useState, useEffect} from "react";
import axios from 'axios';
import { useAuth0 } from "../react-auth0-spa";


const Profile = () => {
  const { loading, user } = useAuth0();
  const [survey, setSurvey] = useState([]);
  const [userId, setUserId] = useState("");



  useEffect(() => {

  const fetchItems = () => {
    // console.log(userEmail)

    // const response = await axios.get(`http://localhost:5000/${user.email}/surveys`);
    // console.log(response.data)
    // setSurvey(response.data)
    // console.log('refreshed')
    // console.log(userIdResponse.data)
    let k = localStorage.getItem('userEmail')
    axios.get(`http://localhost:5000/${k}/surveys`)
    .then(res => {
      console.log(res)
      setSurvey(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }
  fetchItems();
}, [])



  return (
    <div>
      {/* <div>{sendDataToServer}</div> */}
        {survey.map((individualSurvey, index) => {
          return (
            <ul key={index}>
        <li>{JSON.stringify(individualSurvey)}</li>
            </ul>
          )
        })}
    </div>
  );
};

export default Profile;