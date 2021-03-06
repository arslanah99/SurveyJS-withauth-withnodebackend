
import React from "react";
import NavBar from "./components/NavBar";

// New - import the React Router components, and the Profile page component
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";
import SurveyEx from "./components/SurveyEx";
import SurveysDone from "./components/SurveysDone"


function App() {
  return (
    <div className="App">
      {/* Don't forget to include the history module */}
      <Router history={history}>
        <header>
          <NavBar />
        </header>
        <Switch>
          <PrivateRoute path="/surveyEx" component={SurveyEx}/>
          {/* <Route path="/profile" component={Profile} /> */}
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/SurveysDone" component={SurveysDone} />

        </Switch>
      </Router>
    </div>
  );
}

export default App; 