import React from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  componentDidMount() {
    this.props.onClear();
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props
      .onLogin(this.state)
      .then(() => this.props.history.push("/lets-eat"));
  };

  handleDemoUser = e => {
    e.preventDefault();
    this.props
      .onLogin({
        email: "demo@demouser.com",
        password: "blackbearsarebest"
      })
      .then(() => this.props.history.push("/lets-eat"));
  };

  renderErrors = () => {
    return this.props.errors.map((error, idx) => (
      <p key={idx} className="errors">
        {error}
      </p>
    ));
  };

  render() {
    return (
      <div className="login-form-background">
        <div className="login-form-container">
          {/* Renders errors if they exist */}
          {this.renderErrors()}
          <div className="signin-header">
            Sign in with your Screamless account
          </div>
          <Form>
            {/* Email Field */}
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
              />
              <Form.Text className="text-muted">
                {/* We'll never share your email with anyone else. */}
              </Form.Text>
            </Form.Group>

            {/* Password Field */}
            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}
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
            <Button
              className="login-button"
              variant="primary"
              type="submit"
              onClick={this.handleDemoUser}
            >
              Sign In Demo User
            </Button>
          </Form>
          <div className="link-to-create">
            <span className="dont-have-account">
              Don't have an Account? {"  "}
            </span>
            <Link to="/create-account" className="create-account">
              Create Your Account
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
