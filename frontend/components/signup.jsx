import React from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
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
    let emailError = null;
    let passwordError = null;
    let firstnameError = null;
    let lastnameError = null;
    if (this.props.errors.length !== 0) {
      this.props.errors.forEach(er => {
        if (er.includes("Email")) {
          emailError = er;
        } else if (er.includes("Password")) {
          passwordError = er;
        } else if (er.includes("First")) {
          firstnameError = er;
        } else if (er.includes("Last")) {
          lastnameError = er;
        }
      });
    }
    return (
      <div className="signup-form-background">
        <div className="signup-form-container">
          <div className="signup-header">Create your account</div>

          <Form>
            <div className="firstname_lastname">
              <Form.Group className="first_name" controlId="formBasicFirstname">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control
                  type="first_name"
                  placeholder="First name"
                  value={this.state.first_name}
                  onChange={this.handleChange("first_name")}
                />
              </Form.Group>

              <Form.Group className="last_name" controlId="formBasicLastname">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control
                  type="last_name"
                  placeholder="Last name"
                  value={this.state.last_name}
                  onChange={this.handleChange("last_name")}
                />
              </Form.Group>
            </div>
            <div className="firstlast">
              <span className="signup-errors">{firstnameError} </span>
              <span className="signup-errors">{lastnameError} </span>
            </div>
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
            <p className="signup-errors">{emailError}</p>

            <Form.Group controlId="formBasicPassword">
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control
                type="password"
                placeholder="Password (6 character minimum)"
                value={this.state.password}
                onChange={this.handleChange("password")}
              />
            </Form.Group>
            <p className="signup-errors">{passwordError}</p>
            <Form.Group controlId="formBasicChecbox">
              <Form.Check type="checkbox" label="Keep me signed in" />
            </Form.Group>
            <Button
              className="signup-button"
              variant="primary"
              type="submit"
              onClick={this.handleSubmit}
            >
              Create your account
            </Button>
          </Form>
          <div className="link-to-signin">
            <span className="have-account">Have an account? {"      "}</span>
            <Link to="/login" className="signin-account">
              Sign in
            </Link>
          </div>
        </div>
      </div>

      // <form>
      //   <label>Last Name:</label>
      //   <input
      //     type="text"
      //     value={this.state.last_name}
      //     onChange={this.handleChange("last_name")}
      //   />
      //   <label>First Name:</label>
      //   <input
      //     type="text"
      //     value={this.state.first_name}
      //     onChange={this.handleChange("first_name")}
      //   />
      //   <label>Email:</label>
      //   <input
      //     type="text"
      //     value={this.state.email}
      //     onChange={this.handleChange("email")}
      //   />
      //   <label>Password:</label>
      //   <input
      //     type="text"
      //     value={this.state.password}
      //     onChange={this.handleChange("password")}
      //   />
      //   {/* <label>Phone Number:</label>
      //   <input
      //     type="text"
      //     value={this.state.phone}
      //     onChange={this.handleChange("phone")}
      //   /> */}
      //   <button onClick={this.handleSubmit}>Signup</button>
      //   <br />
      //   Have an account? <Link to={`/sessions/new`}>Sign In</Link>
      // </form>
    );
  }
}

export default Signup;
