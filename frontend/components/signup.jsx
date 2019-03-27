import React from "react";
import { Link } from "react-router-dom";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(user_input) {
    return e => {
      e.preventDefault();
      this.setState({ [user_input]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
  }
  render() {
    return (
      <form>
        <label>Last Name:</label>
        <input
          type="text"
          value={this.state.last_name}
          onChange={this.handleChange("last_name")}
        />
        <label>First Name:</label>
        <input
          type="text"
          value={this.state.first_name}
          onChange={this.handleChange("first_name")}
        />
        <label>Email:</label>
        <input
          type="text"
          value={this.state.email}
          onChange={this.handleChange("email")}
        />
        <label>Password:</label>
        <input
          type="text"
          value={this.state.password}
          onChange={this.handleChange("password")}
        />
        {/* <label>Phone Number:</label>
        <input
          type="text"
          value={this.state.phone}
          onChange={this.handleChange("phone")}
        /> */}
        <button onClick={this.handleSubmit}>Signup</button>
        <br />
        Have an account? <Link to={`/sessions/new`}>Sign In</Link>
      </form>
    );
  }
}

export default Signup;
