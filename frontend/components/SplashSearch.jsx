import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";

const styles = {
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4
  }
};

function SplashSearch(props) {
  const { classes } = props;
  const [address, setAddress] = useState("");

  return (
    <Paper className={classes.root} elevation={1}>
      <IconButton className={classes.iconButton} aria-label="Search">
        <SearchIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        value={address}
        onChange={e => setAddress(e.target.value)}
        placeholder="Enter a delivery address"
      />

      <Divider className={classes.divider} />
      <IconButton
        color="primary"
        className={classes.iconButton}
        aria-label="Directions"
        onClick={() => console.log(`im clicked!! address is ${address}`)}
      >
        <DirectionsIcon />
      </IconButton>
    </Paper>
  );
}

SplashSearch.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SplashSearch);
