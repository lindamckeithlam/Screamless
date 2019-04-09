import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormContainer from "./LoginFormContainer";
import SignupFormContainer from "./SignupFormContainer";
import Splash from "./splash";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import ProfileContainer from "./Profile";
import BrowseByCategory from "./restaurants/BrowseByCategory";
import RestaurantShow from "./restaurants/RestaurantShow";
import PersonalProfileContainer from "./users/PersonalProfileContainer";
class App extends Component {
  render() {
    return (
      <div>
        {/* <Splash /> */}
        {/* <LoginFormContainer />
        <SignupFormContainer /> */}
        <Switch>
          <Route path="/browse" component={BrowseByCategory} />
          <ProtectedRoute path="/lets-eat" component={ProfileContainer} />
          <ProtectedRoute
            path="/account"
            component={PersonalProfileContainer}
          />
          <AuthRoute exact path="/" component={Splash} />
          <AuthRoute path="/create-account" component={SignupFormContainer} />
          <AuthRoute path="/login" component={LoginFormContainer} />
          <ProtectedRoute
            path="/menu/:restaurant_id"
            component={RestaurantShow}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
