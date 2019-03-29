import { connect } from "react-redux";
import { signup } from "../actions/session_actions";
import SignupForm from "./SignupForm";

const msp = state => {
  return {
    errors: state.errors
  };
};

const mdp = dispatch => ({
  onSignup: user => dispatch(signup(user))
});

export default connect(
  msp,
  mdp
)(SignupForm);
