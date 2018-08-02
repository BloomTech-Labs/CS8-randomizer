import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { editUser } from "../../actions";
import jwt_decode from "jwt-decode";

import "./setup.css";

class Setup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleInputChange = event => {
    console.log("handleInputChange");
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.confirmPassword !== this.state.password) {
      alert("Passwords do not match");
      return;
    }
    if (this.state.password.length < 6) {
      alert("Password must be six or more chatacters in length");
      return;
    }
    console.log("this.state.email", this.state.email)
    console.log("this.state.password", this.state.password)
    const logged_in_user_id = jwt_decode(localStorage.jwtToken).sub;
  console.log("logged_in_user_id:", logged_in_user_id)
    this.props.editUser({
      email: this.state.email.trim(),
      password: this.state.password.trim()
    });
    this.setState({
      email: "",
      password: "",
      confirmPassword: ""
    });
  };


  render() {
    return (
      <div className="set-div">
        <Form>
          <FormGroup>
            <Label for="userEmail">Email: </Label>
            <Input
              type="email"
              name="email"
              id="userEmail"
              placeholder="Enter your email here and 'Save' to Update"
              onChange={this.handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="userPassword">Old Password</Label>
            <Input
              type="password"
              name="password"
              id="userPassword1"
              placeholder=" Enter your old password here "
              onChange={this.handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="userPassword">New Password</Label>
            <Input
              type="password"
              name="confirmPassword"
              id="userPassword2"
              placeholder=" Enter your new password here "
              onChange={this.handleInputChange}
            />
          </FormGroup>

          <Button onClick={this.handleSubmit}>Save</Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { editUser }
)(Setup);
