import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "react-bootstrap/Button";
import find from "lodash/find";
import { reorderItems } from "../actions/order_actions";

const styles = {
  card: {
    maxWidth: 265,
    maxHeight: 240
    // textOverflow: "ellipsis"
  },
  media: {
    height: 110
  }
};

const msp = (state, ownProps) => {
  return {
    ...ownProps,
    restaurant: find(
      state.restaurants.restaurants,
      r => r.id === ownProps.order.restaurantId
    )
  };
};

const mdp = dispatch => {
  return {
    onReorder: order => dispatch(reorderItems(order))
  };
};

class OrderCard extends React.Component {
  render() {
    const { classes, order, restaurant } = this.props;
    let prev_order = {};

    order.items.forEach(el => {
      if (prev_order[el.name] === undefined) {
        prev_order[el.name] = 1;
      } else {
        prev_order[el.name] += 1;
      }
    });

    let item_names = [];
    Object.entries(prev_order).forEach(([key, value]) => {
      item_names.push(` ${value} ${key}`);
    });

    item_names =
      item_names.join(",").length > 30
        ? item_names.join(",").substring(0, 27) + "..."
        : item_names.join(",");

    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={
            restaurant ? restaurant.img_url : "https://i.imgur.com/5wiDGLB.png"
          }
          title={
            order.restaurantName.length > 13
              ? order.restaurantName.substring(0, 10)
              : order.restaurantName
          }
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h6">
            <Link style={{ textDecoration: "none" }} to={`/orders/${order.id}`}>
              <h4 className="order-card-container" style={{ color: "#2b8282" }}>
                {order.restaurantName}
              </h4>
            </Link>
          </Typography>

          <Typography component="p" style={{ marginBottom: "5%" }}>
            <span>{item_names}</span>
            {/* {JSON.stringify(order.items.name)} */}
            {/* {restaurant && restaurant.address} */}
          </Typography>
          <Button
            onClick={() => {
              this.props.onReorder(order);

              this.props.history.push(`/menu/${order.restaurantId}`);
            }}
            className="reorder-button"
          >
            Reorder Now
          </Button>
        </CardContent>
      </Card>
    );
  }
}

OrderCard.propTypes = {
  classes: PropTypes.object.isRequired
};

const OrderCardContainer = withRouter(
  connect(
    msp,
    mdp
  )(OrderCard)
);

export default withStyles(styles)(OrderCardContainer);
