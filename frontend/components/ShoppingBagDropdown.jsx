import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { connect } from "react-redux";

const msp = (state, ownProps) => {
  return {
    currentOrder: state.currentOrder
  };
};

const mdp = dispatch => ({});

class ShoppingBagDropdown extends React.Component {
  state = {
    expanded: false
  };

  renderExpandedBag = () => {
    if (!this.state.expanded) return;
    const { items } = this.props.currentOrder;

    const orderMap = items.map(item => (
      <Row key={item.id}>
        <Col xs>1</Col>
        <Col xs>{item.name}</Col>
        <Col xs>{`$ ${item.price}`}</Col>
      </Row>
    ));
    return (
      <div
        className="bag-container"
        onClick={() => this.setState({ expanded: false })}
      >
        <div className="bag-main" onClick={e => e.stopPropagation()}>
          {orderMap.length === 0 ? "Your bag is empty." : orderMap}
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
