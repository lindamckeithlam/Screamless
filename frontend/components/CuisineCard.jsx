import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

const styles = {
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60
  }
};

function CuisineCard(props) {
  const { classes } = props;

  return (
    <Link to="/browse">
      <Avatar alt="Remy Sharp" src={props.url} className={classes.bigAvatar} />
      {props.cuisineName}
    </Link>
  );
}

CuisineCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CuisineCard);
