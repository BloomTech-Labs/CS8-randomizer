import React from "react";
import { connect } from 'react-redux';
import { login, signup } from '../../actions';
import { withRouter } from "react-router-dom";

import {
  Nav,
  NavItem,
  NavLink,
  Button,
  Modal,
  ModalHeader,
  ModalFooter,
  ModalBody,
  InputGroup,
  Input
} from "reactstrap";

import "./landing.css";

class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.signToggle = this.signToggle.bind(this);
    this.logToggle = this.logToggle.bind(this);
    this.abToggle = this.abToggle.bind(this);
    // this.isAuth = this.auth.bind(this);
    this.state = {
      dropdownOpen: false,
      signModal: false,
      logModal: false,
      abModal: false,
      // isAuth: this.props.auth
      username: "",
      password: "",
      confirmPassword: ""
    };
  }

  logToggle() {
    this.setState({
      // dropdownOpen: !this.state.dropdownOpen,
      logModal: !this.state.logModal
    });
  }
  signToggle() {
    this.setState({
      // dropdownOpen: !this.state.dropdownOpen,
      signModal: !this.state.signModal
    });
  }
  abToggle() {
    this.setState({
      abModal: !this.state.abModal
    });
  }
  loginSimulation() {
    console.log("Logging in");
    this.setState({
      isAuth: true
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.confirmPassword !== this.state.password) {
      alert("Passwords do not match");
      return;
    }
    if (this.state.password.length < 6) {
      alert("Password must be six or more characters in length");
      return;
    }
    this.props.signup({
      username: this.state.username.trim(),
      password: this.state.password.trim()
    }, this.props.history);
    this.setState({
      username: "",
      password: "",
      confirmPassword: "",
      dropdownOpen: false,
      signModal: false,
      logModal: false,
      abModal: false,
    });
  };

  handleLogin = event => {
    event.preventDefault();
    if (this.state.password.length < 6) {
      alert("Password must be six or more characters in length");
      return;
    }
    this.props.login({
      username: this.state.username.trim(),
      password: this.state.password.trim()
    }, this.props.history);
    this.setState({
      username: "",
      password: "",
      confirmPassword: ""
    });
  };

  handleChange = event => {
    console.log("HANDLECHANGE");
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="landing">
        <Nav className="nav">
          <NavItem className="nav-about">
            <NavLink>
              <Button id="nav-button" onClick={this.abToggle}>
                About Randomizer
              </Button>
            </NavLink>
          </NavItem>
          <NavItem className="nav-signup">
            <Modal 
              isOpen={this.state.abModal}
              toggle={this.abToggle}
              className={this.props.className}
            >
              <ModalHeader className = 'modalHeader' toggle={this.abToggle}>Our App</ModalHeader>
              <ModalFooter className = 'modalFooter'>
                <p>Randomiser is a web app that allows teachers to pick students randomly to call on in class. This allows the teacher to make sure that all students get a chance to answer a question before they are called on a second time.</p>
                <Button id = 'nav-button' color="primary" onClick={this.signToggle}>
                  Sign Up
                </Button>{" "}
                {/* <Button color="secondary" onClick={this.signToggle}>
                  Cancel
                </Button> */}
              </ModalFooter>
              <Modal isOpen={this.state.signModal} toggle={this.signToggle}>
                <ModalHeader toggle={this.signToggle}>Sign Up</ModalHeader>
                <ModalBody>
                  <Input
                    className="form__input"
                    type="email"
                    name="username"
                    placeholder="Username (required, 30 chars max)..."
                    maxLength="30"
                    required
                    onChange={this.handleChange}
                    value={this.state.username}
                  />
                  <Input
                    className="form__input"
                    type="email"
                    name="password"
                    placeholder="Password (required, 15 chars max)..."
                    maxLength="15"
                    required
                    onChange={this.handleChange}
                    value={this.state.password}
                  />
                  <Input
                    className="form__input"
                    type="email"
                    name="confirmPassword"
                    placeholder="Confirm Password (required)..."
                    maxLength="15"
                    required
                    onChange={this.handleChange}
                    value={this.state.confirmPassword}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={this.handleSubmit} >Submit</Button>
                  {/* <Button color="primary" onClick={this.signToggle}>
                    Cancel
                  </Button> */}
                </ModalFooter>
              </Modal>
            </Modal>
          </NavItem>
        </Nav>
        <Nav id="nav-login" className="nav-login">
          <NavItem id="nav-login-button">
            <Button id="nav-button" onClick={this.logToggle}>
              Login
            </Button>
            <Modal
              isOpen={this.state.logModal}
              toggle={this.logToggle}
              className={this.props.className}
            >
              <ModalHeader className = 'modalHeader' toggle={this.logToggle}>Login</ModalHeader>
              <ModalBody>
                <Input 
                    type="username"
                    name="username"
                    placeholder="Username (required, 30 chars max)..."
                    maxLength="30"
                    required
                    onChange={this.handleChange}
                    value={this.state.username} />
                <Input 
                    type="password"
                    name="password"
                    placeholder="Password (required, 15 chars max)..."
                    maxLength="15"
                    required
                    onChange={this.handleChange}
                    value={this.state.password}/>

              </ModalBody>
              <ModalFooter className = 'modalFooter'> 
                  <Button id = 'nav-button'color="primary" onClick={this.handleLogin}>Confirm</Button>
                {/* <Button color="secondary" onClick={this.logToggle}>
                  Cancel
                </Button> */}
              </ModalFooter>
            </Modal>
          </NavItem>
        </Nav>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps, { login, signup })(withRouter(Landing));
