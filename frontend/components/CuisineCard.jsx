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
  const { classes, url, cuisineName, onClick } = props;

  if (window.location.href.includes("browse")) {
    return (
      <div onClick={onClick} style={{ cursor: "pointer" }}>
        <Avatar alt={cuisineName} src={url} className={classes.bigAvatar} />
        {cuisineName}
      </div>
    );
  } else {
    return (
      <Link onClick={onClick} to="/browse">
        <Avatar alt="Remy Sharp" src={url} className={classes.bigAvatar} />
        {cuisineName}
      </Link>
    );
  }
}

CuisineCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CuisineCard);
