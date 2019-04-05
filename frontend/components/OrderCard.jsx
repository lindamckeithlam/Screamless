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

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
};

function OrderCard(props) {
  const { classes } = props;
  return (
    <Card onClick={() => console.log("order clicked")} className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="http://four32c.com/wp-content/uploads/2015/09/desserts.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Malted Strawberry Bites
          </Typography>
          <Typography component="p">
            The malted whipped cream in these fruity cream puffs is a
            revelation--make it alone to top pies, sundaes or hot cocoa, and be
            sure to lick the beaters!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

OrderCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OrderCard);
