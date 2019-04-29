import React, { useState } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import InputAutosuggest from "./InputAutosuggest";
import uniq from "lodash/uniq";
import { connect } from "react-redux";
import { fetchRestaurants } from "../actions/restaurant_actions";
import { filterByCuisine } from "../actions/filter_actions";

const styles = {
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
    boxShadow: "none"
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

function mapRestaurants(restaurants) {
  return restaurants.map(r => ({
    value: r.id,
    label: r.name,
    group: "restaurant"
  }));
}

function mapCuisines(cuisines) {
  return cuisines.map(c => ({
    value: c,
    label: c,
    group: "cuisine"
  }));
}

const msp = state => {
  const restaurants = state.restaurants.restaurants;
  const cuisines = uniq(restaurants.map(r => r.cuisine_name));

  return {
    restaurants: mapRestaurants(restaurants),
    cuisines: mapCuisines(cuisines)
  };
};

const mdp = dispatch => ({
  onFilterCuisine: cuisine => dispatch(filterByCuisine(cuisine)),
  onFetchRestaurants: () => dispatch(fetchRestaurants())
});

class SplashSearch extends React.Component {
  constructor(props) {
    super(props);

    this.searchRef = React.createRef();
  }

  componentDidMount() {
    const { restaurants, onFetchRestaurants } = this.props;
    // Search on enter
    window.addEventListener("keypress", e => {
      var key = e.which || e.keyCode;
      key === 13 && this.onClickSearch();
    });

    if (!restaurants.length) {
      onFetchRestaurants();
    }
  }

  onClickSearch = () => {
    const search = this.searchRef;
    const suggestions = search.state.suggestions;

    if (!suggestions.length) {
      this.props.history.push("/browse");
    }

    return this.handleClick(search.state.suggestions[0].options[0]);
  };

  handleClick = e => {
    if (e.group === "restaurant") {
      this.onClickRestaurant(e.value);
    } else {
      this.onClickCuisine(e.value);
    }
  };

  onClickRestaurant = id => {
    this.props.history.push(`/menu/${id}`);
  };

  onClickCuisine = cuisine => {
    this.props.history.push("/browse");
    this.props.onFilterCuisine(cuisine);
  };

  getOptions = () => {
    const { restaurants, cuisines } = this.props;
  };

  render() {
    const { classes, placeholder, restaurants, cuisines } = this.props;
    const options = [
      { title: "Restaurants", options: restaurants },
      { title: "Cuisines", options: cuisines }
    ];

    return (
      <Paper className={classes.root} elevation={1}>
        <IconButton className={classes.iconButton} aria-label="Search">
          <SearchIcon />
        </IconButton>

        <InputAutosuggest
          innerRef={node => (this.searchRef = node)}
          handleClick={this.handleClick}
          placeholder={placeholder}
          options={options}
        />
      </Paper>
    );
  }
}

SplashSearch.propTypes = {
  classes: PropTypes.object.isRequired
};

const SplashSearchContainer = withRouter(
  connect(
    msp,
    mdp
  )(SplashSearch)
);

export default withStyles(styles)(SplashSearchContainer);
