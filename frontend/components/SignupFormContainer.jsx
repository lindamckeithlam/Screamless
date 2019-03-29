import { connect } from "react-redux";
import { signup, clearErrors } from "../actions/session_actions";
import SignupForm from "./SignupForm";

const msp = state => {
  return {
    errors: state.errors
  };
};

const mdp = dispatch => ({
  onSignup: user => dispatch(signup(user)),
  onClear: () => dispatch(clearErrors())
});

export default connect(
  msp,
  mdp
)(SignupForm);
