import React from 'react';
import { Nav, NavItem, NavLink, Button, Modal, ModalHeader, ModalFooter, ModalBody, InputGroup, Input } from 'reactstrap';

import './landing.css'


export default class Landing extends React.Component {
  constructor (props) {
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
    abToggle(){
      this.setState({
        abModal: !this.state.abModal
      })
    }
    loginSimulation(){
      console.log('Logging in')
      this.setState({
        isAuth: true
      });
    }
  render() {
    return (
      <div className='landing'>
        <Nav className='nav'>
          <NavItem className='nav-about'>
            <NavLink><Button id='nav-button' onClick={this.abToggle}>About Magic Randomizer</Button></NavLink>
          </NavItem>
          <NavItem className='nav-signup'>
            <Modal isOpen={this.state.abModal} toggle={this.abToggle} className={this.props.className}>
          <ModalHeader toggle={this.abToggle}>Our App</ModalHeader>
          <ModalFooter>
            <Button color="primary" onClick={this.signToggle}>Sign Up</Button>{' '}
            <Button color="secondary" onClick={this.signToggle}>Cancel</Button>
          </ModalFooter>
          <Modal isOpen={this.state.signModal} toggle={this.signToggle}>
          <ModalHeader toggle={this.signToggle}>Sign Up</ModalHeader>
          <ModalBody>
              <Input placeholder="Email"/>
              <Input placeholder="Password"/>
              <Input placeholder="Confirm Password"/>
          </ModalBody>
          <ModalFooter>
            <NavLink href='/classes/'><Button color="primary">Submit</Button></NavLink>
            
            <Button color="primary" onClick={this.signToggle}>Cancel</Button>
          </ModalFooter>
          </Modal>
        </Modal>
          </NavItem>
        </Nav>
        <Nav id='nav-login' className='nav-login'>
          <NavItem id='nav-login-button'>
              <Button id='nav-button' onClick={this.logToggle}>Login</Button>
              <Modal isOpen={this.state.logModal} toggle={this.logToggle} className={this.props.className}>
          <ModalHeader toggle={this.logToggle}>Login</ModalHeader>
          <ModalBody>
            <Input placeholder="Email" />
            <Input placeholder="Password"/>
          </ModalBody>
          <ModalFooter>
           <NavLink href='/classes'><Button color="primary" >Confirm</Button></NavLink>{' '}
            <Button color="secondary" onClick={this.logToggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

// export default Landing;