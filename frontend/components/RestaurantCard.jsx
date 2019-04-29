import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
const styles = {
  card: {
    maxWidth: 345,
    marginBottom: "5%"
  },
  media: {
    height: 140
  }
};

function RestaurantCard(props) {
  const { classes, restaurant } = props;

  let reviews = (
    <div className="star-ratings">
      <div
        className="star-ratings-top"
        style={{ width: `${(restaurant.rating / 5) * 100}%` }}
      >
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>
      <div className="star-ratings-bottom">
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>
    </div>
  );

  return (
    <>
      <Link to={`/menu/${restaurant.id}`} className="link-test">
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={restaurant.img_url}
              title="Quantum Leap"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {restaurant.name}
              </Typography>
              <div className="cuisine-name-rating">
                <p className="cuisine-name">{restaurant.cuisine_name}</p>{" "}
                <span>{reviews}</span>
              </div>
              <Typography component="p">{restaurant.address}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </>
  );
}

RestaurantCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RestaurantCard);
