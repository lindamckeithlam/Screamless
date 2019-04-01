import React from "react";
import { connect } from "react-redux";

const msp = (state, ownProps) => {
  return {
    currentOrder: state.currentUser.currentOrder || []
  };
};

const mdp = dispatch => ({});

class ShoppingBagDropdown extends React.Component {
  state = {
    expanded: false
  };

  renderExpandedBag = () => {
    if (!this.state.expanded) return;
    const currentOrder = this.props.currentOrder;
    const orderMap = currentOrder.map(item => (
      <div>
        <div>{item.name}</div>
        <div>{item.price}</div>
      </div>
    ));
    return (
      <div
        className="bag-container"
        onClick={() => this.setState({ expanded: false })}
      >
        <div className="bag-main" onClick={e => e.stopPropagation()}>
          {currentOrder.length === 0 ? "Your bag is empty." : orderMap}
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        <i
          onClick={() => this.setState({ expanded: !this.state.expanded })}
          className="fas fa-shopping-bag shopping-bag-icon"
        />

        {this.renderExpandedBag()}
      </div>
    );
  }
}
export default connect(
  msp,
  mdp
)(ShoppingBagDropdown);
