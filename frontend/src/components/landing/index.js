import React from 'react';
import { Button } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';


export default class Landing extends React.Component {
  constructor (props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        dropdownOpen: false
      };
    }

    toggle() {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }
  render() {
    return (
      <div>
        <Nav>
          <NavItem>
            <NavLink href="/About"><Button outline black="primary">About Magic Randomizer</Button></NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/SignUp"> <Button outline black="secondary">Sign Up</Button></NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/LogIn"><Button outline black="success">Log In</Button></NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

// export default Landing;