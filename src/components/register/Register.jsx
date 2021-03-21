import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormErrors from "./formerrors";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      formError: { username: "", password: "" },
      usernameValid: false,
      passwordvalid: false,
      isFormValid: false,
    };
  }

  handleUserInput = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    this.setState(
      {
        [name]: value,
      },
      () => {
        this.validateField(name, value);
      }
    );
  };

  validateField(fieldname, value) {
    let fieldvalidationerror = this.state.formError;
    let usernameValid = this.state.usernameValid;
    let passwordValid = this.state.passwordvalid;
    switch (fieldname) {
      case "username":
        usernameValid = value != null && value.length >= 5;
        fieldvalidationerror.username = usernameValid ? "" : "is invalid";
        break;
      case "password":
        passwordValid = value != null && value.length >= 6;
        fieldvalidationerror.password = passwordValid ? "" : "is too short";
        break;
      default:
        break;
    }
    this.setState(
      {
        formError: fieldvalidationerror,
        usernameValid: usernameValid,
        passwordvalid: passwordValid,
      },
      this.validateForm
    );
  }
  validateForm() {
    this.setState({
      isFormValid: this.state.usernameValid && this.state.passwordvalid,
    });
  }

  loginUser = (event) => {
    event.preventDefault();
    //TODo
  };

  render() {
    return (
      <Form>
        <h2>Register</h2>
        <FormErrors errors={this.state.formError}></FormErrors>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="username"
            type="email"
            placeholder="Enter email"
            value={this.state.username}
            onChange={this.handleUserInput}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleUserInput}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            name="cpassword"
            type="password"
            placeholder="Confirm Password"
            value={this.state.password}
            onChange={this.handleUserInput}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={this.loginUser}>
          Submit
        </Button>
      </Form>
    );
  }
}

export default Register;
