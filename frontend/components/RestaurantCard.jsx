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
    maxWidth: 345
  },
  media: {
    height: 140
  }
};

function RestaurantCard(props) {
  const { classes, restaurant } = props;
  // onClick = {() => this.props.onFetchRestaurant(restaurant.id).then(props.)
  return (
    <>
      <Link to={`/menu/${restaurant.id}`}>
        <Card
          onClick={() => console.log("restaurant clicked")}
          className={classes.card}
        >
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://images.happycow.net/venues/1024/14/27/hcmp142747_497146.jpeg"
              title="Quantum Leap"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {restaurant.name}
              </Typography>
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
