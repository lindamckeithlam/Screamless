import React from "react";
import { Link } from "react-router-dom";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
      <>
        <form onSubmit={this.handleSubmit}>
          <label>Email:</label>
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleChange("email")}
          />

          <label>Password:</label>
          <input
            type="password"
            value={this.state.password}
            onChange={this.handleChange("password")}
          />
        </form>
        <button onClick={this.handleSubmit}>Sign In</button>
        <br />
        Don't have an Account?
        <Link to="/users/new">Create Your Account</Link>
      </>
    );
  }
}

export default Login;
