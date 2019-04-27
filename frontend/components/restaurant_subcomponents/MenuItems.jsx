import React from "react";
import Button from "react-bootstrap/Button";
import { Grid, Row, Col } from "react-flexbox-grid";
import { connect } from "react-redux";
import { addItemToBag } from "../../actions/restaurant_actions";
import classNames from "classnames";

const msp = (state, props) => {
  return {
    ...props
  };
};

const mdp = (dispatch, props) => ({
  onAddItem: item =>
    dispatch(addItemToBag(item, props.restaurantId, props.restaurantName))
});

class MenuItems extends React.Component {
  renderMenuItems = menuItems => {
    let menuItemsRows = menuItems.reduce((rows, item, i) => {
      let rowIndex = Math.floor(i / 2);

      i % 2 === 0 ? (rows[rowIndex] = [item]) : rows[rowIndex].push(item);

      return rows;
    }, []);

    return menuItemsRows.map(this.renderMenuRow);
  };

  renderMenuRow = (rowItems, idx) => {
    return (
      <Row style={{ marginBottom: 4 }} key={idx} start="xs">
        {rowItems.map(this.renderItem)}
      </Row>
    );
  };

  renderItem = item => {
    const showDesc = item.restaurant_id % 2 === 0;

    return (
      <Col key={item.id} xs>
        <Button
          onClick={() => this.props.onAddItem(item)}
          variant="light"
          className={classNames({
            "menu-item-button-container": true,
            "menu-button-desc": showDesc
          })}
        >
          <div className="flex-container-menu-item">
            <div className="menu-item-name">{item.name}</div>
            <div className="menu-item-price">{`$${item.price}.00+`}</div>
          </div>
          {showDesc && (
            <div className="menu-item-description">{item.description}</div>
          )}
        </Button>
      </Col>
    );
  };

  render() {
    const menuItems = Object.values(this.props.menuItems);

    const appetizers = menuItems.filter(item => item.category === "appetizer");
    const entrees = menuItems.filter(item => item.category === "entree");
    const desserts = menuItems.filter(item => item.category === "dessert");

    return (
      <div className="menu-item-background">
        <Grid fluid className="menu-item-container">
          <Row>
            <h2>Appetizers</h2>
          </Row>
          {this.renderMenuItems(appetizers)}

          <Row>
            <h2>Entrees</h2>
          </Row>
          {this.renderMenuItems(entrees)}

          <Row>
            <h2>Desserts</h2>
          </Row>
          {this.renderMenuItems(desserts)}
        </Grid>
      </div>
    );
  }
}

export default connect(
  msp,
  mdp
)(MenuItems);
