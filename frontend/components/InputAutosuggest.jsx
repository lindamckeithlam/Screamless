import React from "react";
import PropTypes from "prop-types";
import deburr from "lodash/deburr";
import Autosuggest from "react-autosuggest";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";
import TextField from "@material-ui/core/TextField";
import InputBase from "@material-ui/core/InputBase";
import ListItem from "@material-ui/core/ListItem";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";

function renderInputComponent(inputProps) {
  const { classes, inputRef = () => {}, ref, ...other } = inputProps;

  return (
    <InputBase
      fullWidth
      inputProps={{
        inputRef: node => {
          ref(node);
          inputRef(node);
        },
        classes: {
          input: classes.input
        }
      }}
      
      {...other}
    />
  );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.label, query);
  const parts = parse(suggestion.label, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map((part, index) =>
          part.highlight ? (
            <span key={String(index)} style={{ fontWeight: 500 }}>
              {part.text}
            </span>
          ) : (
            <strong key={String(index)} style={{ fontWeight: 300 }}>
              {part.text}
            </strong>
          )
        )}
      </div>
    </MenuItem>
  );
}

const styles = theme => ({
  root: {
    height: 250,
    flexGrow: 1
  },
  container: {
    position: "relative"
  },
  suggestionsContainerOpen: {
    position: "absolute",
    minWidth: "350px",
    zIndex: 1,
    marginTop: theme.spacing.unit,
    padding: "2% 5%",
    color: "black",
    left: 0,
    right: 0,
    backgroundColor: "white",
    fontFamily: "Graphik",
    boxShadow: "5px 2px 10px #888888"
  },
  suggestion: {
    display: "block"
  },
  suggestionsList: {
    margin: 0,
    padding: 0
  },
  divider: {
    height: theme.spacing.unit * 2
  }
});

class InputAutosuggest extends React.Component {
  state = {
    single: "",
    popper: "",
    suggestions: []
  };

  getSuggestions = value => {
    const inputValue = deburr(value.trim()).toLowerCase();
    let count = 0;

    if (inputValue === "") {
      return [];
    }
    const regex = new RegExp("^" + inputValue, "i");

    const final = this.props.options
      .map(section => {
        return {
          title: section.title,
          options: section.options.filter(option => {
            const keep = count < 5 && regex.test(option.label);

            if (keep) {
              count += 1;
            }

            return keep;
          })
        };
      })
      .filter(section => section.options.length > 0);

    return final;
  };

  handleSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  handleChange = name => (event, { newValue }) => {
    this.setState({
      [name]: newValue
    });
  };

  getSuggestionValue = suggestion => {
    this.props.handleClick(suggestion);
    return suggestion.label;
  };

  renderSectionTitle = section => {
    return <strong>{section.title}</strong>;
  };

  getSectionSuggestions = section => {
    return section.options;
  };

  renderSuggestion = suggestion => {
    return (
      <div className="dropdown-search-label">
        <ListItem>{suggestion.label}</ListItem>
      </div>
    );
  };

  render() {
    const { classes, placeholder } = this.props;

    const autosuggestProps = {
      renderInputComponent,
      suggestions: this.state.suggestions,
      onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
      onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
      getSuggestionValue: this.getSuggestionValue,
      renderSuggestion,
      renderSectionTitle: this.renderSectionTitle,
      getSectionSuggestions: this.getSectionSuggestions,
      renderSuggestion: this.renderSuggestion
    };

    return (
      <Autosuggest
        multiSection={true}
        {...autosuggestProps}
        inputProps={{
          classes,
          placeholder: placeholder,
          value: this.state.single,
          onChange: this.handleChange("single")
        }}
        theme={{
          container: classes.container,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion
        }}
        className="search-box-nav"
      />
    );
  }
}

InputAutosuggest.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InputAutosuggest);
