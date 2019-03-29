import { login } from "../actions/session_actions";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";

const msp = state => {
  return {
    errors: state.errors
  };
};

const mdp = dispatch => ({
  onLogin: user => dispatch(login(user))
});

export default connect(
  msp,
  mdp
)(LoginForm);
