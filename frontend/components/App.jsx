import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormContainer from "./login_form_container";
import SignupFormContainer from "./signup_form_container";
import Splash from "./splash";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Profile from "./profile";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Splash /> */}
        {/* <LoginFormContainer />
        <SignupFormContainer /> */}
        <Switch>
          <ProtectedRoute path="/lets-eat" component={Profile} />
          <AuthRoute exact path="/" component={Splash} />
          <AuthRoute path="/create-account" component={SignupFormContainer} />
          <AuthRoute path="/login" component={LoginFormContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
