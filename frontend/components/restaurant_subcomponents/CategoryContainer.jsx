import React from "react";
import { connect } from "react-redux";
import { fetchCuisines, fetchCuisine } from "../../actions/restaurant_actions";

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
  }
  render() {
    return (
      <div>
        <div />
        <div className="order-question">Delivery Address</div>
      </div>
    );
  }
}

const msp = state => ({
  cuisines: Object.values(state.cuisines)
});

const mdp = dispatch => ({
  onFetchCuisines: () => dispatch(fetchCuisines()),
  onfetchCuisine: id => dispatch(fetchCuisine(id))
});

export default connect(
  msp,
  mdp
)(Category);
