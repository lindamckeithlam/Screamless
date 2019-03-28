import React from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Profile from "./profile";
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
    this.props
      .action(this.state)
      .then(() => this.props.history.push("/lets-eat"));
  }

  render() {
    let errors = null;
    if (this.props.errors[0]) {
      errors = this.props.errors[0];
    }
    return (
      <div className="login-form-background">
        <div className="login-form-container">
          <p className="errors">{errors}</p>
          <div className="signin-header">
            Sign in with your Screamless account
          </div>
          <Form>
            <Form.Group controlId="formBasicEmail">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control
                type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleChange("email")}
              />
              <Form.Text className="text-muted">
                {/* We'll never share your email with anyone else. */}
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange("password")}
              />
            </Form.Group>
            <Form.Group controlId="formBasicChecbox">
              <Form.Check type="checkbox" label="Keep me signed in" />
            </Form.Group>
            <Button
              className="login-button"
              variant="primary"
              type="submit"
              onClick={this.handleSubmit}
            >
              Sign In
            </Button>
          </Form>
          <div className="link-to-create">
            <span className="dont-have-account">
              Don't have an Account? {"  "}
            </span>
            <Link to="/users/new" className="create-account">
              Create Your Account
            </Link>
          </div>
        </div>
      </div>
    );
  }
  // render() {
  //   return (
  //     <>
  //       <form onSubmit={this.handleSubmit}>
  //         <label>Email:</label>
  //         <input
  //           type="text"
  //           value={this.state.email}
  //           onChange={this.handleChange("email")}
  //         />

  //         <label>Password:</label>
  //         <input
  //           type="password"
  //           value={this.state.password}
  //           onChange={this.handleChange("password")}
  //         />
  //       </form>
  //       <button onClick={this.handleSubmit}>Sign In</button>
  //       <Profile />
  //       <br />
  //       Don't have an Account?
  //       <Link to="/users/new">Create Your Account</Link>
  //     </>
  //   );
  // }
}

export default Login;
