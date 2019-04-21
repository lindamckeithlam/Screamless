import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import find from "lodash/find";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
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

class OrderCard extends React.Component {
  render() {
    const { classes, order, restaurant } = this.props;
    return (
      <Link style={{ textDecoration: "none" }} to={`/orders/${order.id}`}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={restaurant && restaurant.img_url}
              title={order.restaurantName}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {order.restaurantName}
              </Typography>
              <Typography component="p">
                {restaurant && restaurant.address}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    );
  }
}

OrderCard.propTypes = {
  classes: PropTypes.object.isRequired
};

const OrderCardContainer = connect(
  msp,
  null
)(OrderCard);

export default withStyles(styles)(OrderCardContainer);
