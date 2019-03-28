import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormContainer from "./login_form_container";
import SignupFormContainer from "./signup_form_container";
import Splash from "./splash";
import { AuthRoute } from "../util/route_util";
import Profile from "./profile";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Splash /> */}
        {/* <LoginFormContainer />
        <SignupFormContainer /> */}
        <Switch>
          <AuthRoute path="/lets-eat" component={Profile} />
          <AuthRoute path="/splash" component={Splash} />
          <AuthRoute path="/users/new" component={SignupFormContainer} />
          <AuthRoute path="/sessions/new" component={LoginFormContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
