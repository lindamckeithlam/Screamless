import { login } from "../actions/session_actions";
import Login from "./login";
import { connect } from "react-redux";

const msp = state => {
  return {
    errors: state.errors,

    user: {
      email: "",
      password: ""
    },
    formType: "Log In"
  };
};

const mdp = dispatch => ({
  action: user => dispatch(login(user))
});

export default connect(
  msp,
  mdp
)(Login);
