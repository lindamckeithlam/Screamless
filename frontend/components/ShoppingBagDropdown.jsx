import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "react-bootstrap/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import {
  removeItemFromBag,
  removeAllItemsFromBag
} from "../actions/restaurant_actions";
import {
  checkoutOrder,
  resetReorder,
  saveCurrentUserDeliveryInstructions
} from "../actions/order_actions";

const msp = (state, ownProps) => {
  return {
    ...ownProps,
    currentOrder: state.currentOrder,
    user: state.currentUser,
    reorder: state.currentUser.reorder
  };
};

const mdp = dispatch => {
  return {
    onRemoveItem: item => dispatch(removeItemFromBag(item)),
    onAddDeliveryInstructions: (id, instruction) =>
      dispatch(saveCurrentUserDeliveryInstructions(id, instruction)),
    onRemoveAll: () => dispatch(removeAllItemsFromBag()),
    onCheckout: history => dispatch(checkoutOrder(history)),
    onResetReorder: () => dispatch(resetReorder())
  };
};

const styles = theme => ({
  badge: {
    top: "50%",
    right: -3,
    // The border color match the background color.
    border: `2px solid ${
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[900]
    }`
  },
  list: {
    width: 380
  },
  drawer: {
    top: "60px"
  }
});

class ShoppingBagDropdown extends React.Component {
  state = {
    expanded: false,
    showModal: false,
    deliveryInstructions: ""
  };

  closeDrawer = () => {
    this.setState({ expanded: false });
  };

  onCheckout = () => {
    const { history, onCheckout } = this.props;

    onCheckout(history);
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  handleShowModal = () => {
    this.setState({ showModal: true });
  };

  renderModal = () => {
    return (
      <Dialog
        className="checkout-instructions-modal"
        open={this.state.showModal}
        onClose={this.handleCloseModal}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Review and place order</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Review address, payments, and tip to complete your purchase
          </DialogContentText>
          <div className="order-settings-modal">
            <h5>Your Order Settings</h5>
            <h6>Delivery, ASAP </h6>

            <p className="user-info-modal">
              {this.props.user.first_name} {this.props.user.last_name}
            </p>
            <p className="user-info-modal">{this.props.user.address}</p>
          </div>
          <TextField
            onChange={e =>
              this.setState({ deliveryInstructions: e.target.value })
            }
            autoFocus
            margin="dense"
            id="name"
            label="Delivery Instructions"
            type="text"
            value={this.state.deliveryInstructions}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button
            className="checkout-button-modal"
            onClick={this.handleCloseModal}
            color="primary"
          >
            Cancel
          </Button>
          <Button
            className="checkout-button-modal"
            onClick={() => {
              this.onCheckout();
              this.handleCloseModal();
            }}
            color="primary"
          >
            Checkout
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  componentDidMount() {
    if (this.props.reorder) {
      this.setState({ expanded: true, showModal: true });
      this.props.onResetReorder();
    }
  }

  renderExpandedBag = () => {
    if (!this.state.expanded) return;
    const { items } = this.props.currentOrder;

    const orderMap = items.map(item => (
      <Row key={item.name}>
        <Col xs>1</Col>
        <Col xs>{item.name}</Col>
        <Col xs>{`$ ${item.price}`}</Col>
      </Row>
    ));

    return (
      <Drawer
        classes={{
          paper: this.props.classes.drawer
        }}
        anchor="right"
        open={this.state.expanded}
        onClose={this.closeDrawer}
      >
        <div
          style={{ top: "60px" }}
          tabIndex={0}
          role="button"
          onKeyDown={this.closeDrawer}
        >
          {this.getSideBarList()}
        </div>
      </Drawer>
    );
  };

  getSideBarList() {
    const { classes, onRemoveItem, onRemoveAll } = this.props;
    const { items, subtotal } = this.props.currentOrder;
    const itemsMap = {};

    items.forEach(
      item =>
        (itemsMap[item.name] = { name: item.name, count: 0, price: item.price })
    );
    items.forEach(item => (itemsMap[item.name].count += 1));
    const itemArr = Object.values(itemsMap);

    if (!itemArr.length) {
      return (
        <div className={classes.list}>
          <div className="cart-error-emptyCart">
            <h5 className="cart-error-title">Your bag is empty.</h5>
          </div>
        </div>
      );
    }
    return (
      <div className={classes.list}>
        <List>
          {itemArr.map((item, index) => {
            return (
              <ListItem button key={item.name + index.toString()}>
                <ListItemText primary={item.count} />
                <ListItemText
                  primary={
                    item.name.length > 20
                      ? item.name.slice(0, 20) + ".."
                      : item.name
                  }
                />
                <ListItemIcon onClick={() => onRemoveItem(item)}>
                  <DeleteIcon />
                </ListItemIcon>
                <ListItemText primary={`$ ${item.price}`} />
              </ListItem>
            );
          })}
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemText primary={"Items subtotal:"} />
            <ListItemText primary={`$ ${subtotal}`} />
          </ListItem>
          <ListItem button>
            <Button className="empty-cart-button" onClick={onRemoveAll}>
              Empty bag
            </Button>
          </ListItem>
        </List>
        <Divider />
        <div className="checkout-button-container">
          <Button
            className="checkout-button"
            onClick={this.handleShowModal}
            variant="primary"
            size="lg"
          >
            Proceed to Checkout
          </Button>
        </div>
      </div>
    );
  }

  render() {
    const { classes, currentOrder } = this.props;

    return (
      <div>
        <IconButton
          onClick={() => this.setState({ expanded: !this.state.expanded })}
          aria-label="shopping-cart"
          className={classes.margin}
        >
          <Badge
            badgeContent={currentOrder.items.length}
            classes={{ badge: classes.badge }}
            color="primary"
          >
            <i className="fas fa-shopping-bag" />
          </Badge>
        </IconButton>

        {this.renderExpandedBag()}
        {this.renderModal()}
      </div>
    );
  }
}

const container = withRouter(
  connect(
    msp,
    mdp
  )(ShoppingBagDropdown)
);
export default withStyles(styles)(container);
