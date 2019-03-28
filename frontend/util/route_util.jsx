import React from "react";
import { Route, Redirect, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const msp = state => {
  return { loggedIn: Boolean(state.sessions.id) };
};

const Auth = ({ component: Component, path, loggedIn, exact }) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={props =>
        !loggedIn ? <Component {...props} /> : <Redirect to="/lets-eat" />
      }
    />
  );
};

const Protected = ({ component: Component, path, loggedIn, exact }) => {
  debugger;
  return (
    <Route
      path={path}
      exact={exact}
      render={props =>
        loggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export const AuthRoute = withRouter(
  connect(
    msp,
    null
  )(Auth)
);
export const ProtectedRoute = withRouter(
  connect(
    msp,
    null
  )(Protected)
);
