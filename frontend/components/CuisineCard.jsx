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

  function filterBrowseCuisine() {
    // set a filter in state
    // if (props.cuisineName !== 'See all restaurants) {
    //    this.props.onFilterCuisine(props.cuisineName)
    // }

    this.props.history.push("/browse");
  }

  return (
    <Link to="/browse" onClick={filterBrowseCuisine}>
      <Avatar alt="Remy Sharp" src={props.url} className={classes.bigAvatar} />
      {props.cuisineName}
    </Link>
  );
}

CuisineCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CuisineCard);
