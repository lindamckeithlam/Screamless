import { fetchUser } from "../../actions/user_actions";
import PersonalProfile from "./PersonalProfile";
import { connect } from "react-redux";

const msp = state => {
  return {
    user: state.currentUser
  };
};

const mdp = dispatch => ({
  onFetchCurrentUser: id => dispatch(fetchUser(id))
});

export default connect(
  msp,
  mdp
)(PersonalProfile);
