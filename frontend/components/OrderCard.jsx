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
  },
  media: {
    height: 110,
    objectFit: "cover"
  },
  noWrap: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
  },
  linkNoWrap: {
    color: "#2b8282",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
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

    const item_names = [];
    Object.entries(prev_order).forEach(([key, value]) => {
      item_names.push(` ${value} ${key}`);
    });

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
          <Link style={{ textDecoration: "none" }} to={`/orders/${order.id}`}>
            <Typography
              style={styles.linkNoWrap}
              gutterBottom
              variant="h5"
              component="h6"
            >
              {order.restaurantName}
            </Typography>
          </Link>

          <Typography style={styles.noWrap} component="p">
            {item_names}
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
