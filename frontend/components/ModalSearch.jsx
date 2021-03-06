import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import { useEffect } from "react";
import { withRouter } from "react-router-dom";
const styles = {
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%"
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10,
    color: "rgb(42,130,130)",
    fontSize: "29px"
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4
  }
};

function ModalSearch(props) {
  const { classes, placeholder, id } = props;
  const [address, setAddress] = useState("");

  useEffect(() => {
    const input = document.getElementById("location_search");
    const options = {
      componentRestrictions: { country: "usa" }
    };

    const gmaps = new google.maps.places.Autocomplete(input, options);

    google.maps.event.addListener(gmaps, "place_changed", () => {
      const place = gmaps.getPlace();
      place.geometry && setAddress(place.formatted_address);
    });
  }, []);

  function saveAddress() {
    props.onSaveAddress(id, address);
    props.onCloseModal();
    props.history.push("/browse");
  }
  return (
    <Paper className={classes.root} elevation={1}>
      <IconButton className={classes.iconButton} aria-label="Search">
        <SearchIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        value={address}
        onChange={e => setAddress(e.target.value)}
        placeholder={placeholder}
        id="location_search"
      />

      <Divider className={classes.divider} />
      <IconButton
        color="primary"
        className={classes.iconButton}
        aria-label="Directions"
        onClick={saveAddress}
      >
        <DirectionsIcon />
      </IconButton>
    </Paper>
  );
}

ModalSearch.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(ModalSearch));
