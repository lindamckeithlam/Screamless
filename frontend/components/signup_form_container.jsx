import { connect } from "react-redux";
import { signup } from "../actions/session_actions";
import Signup from "./signup";

const msp = state => {
  return {
    errors: Object.values(state.errors),
    user: {
      email: "",
      password: "",
      last_name: "",
      first_name: ""
      // phone: ""
    },
    formType: "Sign Up"
  };
};

const mdp = dispatch => ({
  action: user => dispatch(signup(user))
});

export default connect(
  msp,
  mdp
)(Signup);
