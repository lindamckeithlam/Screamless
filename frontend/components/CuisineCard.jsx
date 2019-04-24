import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

const styles = {
  bigAvatar: {
    margin: "4px",
    width: 110,
    height: 110
  }
};

function CuisineCard(props) {
  const { classes, url, cuisineName, onClick } = props;

  if (window.location.href.includes("browse")) {
    return (
      <div
        className="cuisine-links"
        onClick={onClick}
        style={{ cursor: "pointer" }}
      >
        <Avatar alt={cuisineName} src={url} className={classes.bigAvatar} />
        <p style={{ marginLeft: "7%" }}>{cuisineName}</p>
      </div>
    );
  } else {
    return (
      <Link className="cuisine-links" onClick={onClick} to="/browse">
        <Avatar alt="Remy Sharp" src={url} className={classes.bigAvatar} />
        <p style={{ marginLeft: "-17%" }}>{cuisineName}</p>
      </Link>
    );
  }
}

CuisineCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CuisineCard);
