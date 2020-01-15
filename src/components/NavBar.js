// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import {Link} from "react-router-dom";
const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {isAuthenticated && (
          <button onClick={() => {logout({}); localStorage.clear()}}>Logout</button>
      )}
       {isAuthenticated && (
      <span>
        <Link to="/SurveyEx">Survey</Link>&nbsp;
        <Link to="/profile">Profile</Link>
        <Link to="/SurveysDone">Surveys Completed</Link>
      </span>
    )}
    </div>
  );
};

export default NavBar; 