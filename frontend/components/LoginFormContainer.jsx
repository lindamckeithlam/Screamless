import { login, clearErrors } from "../actions/session_actions";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";

const msp = state => {
  return {
    errors: state.errors
  };
};

const mdp = dispatch => ({
  onLogin: user => dispatch(login(user)),
  onClear: () => dispatch(clearErrors())
});

export default connect(
  msp,
  mdp
)(LoginForm);
