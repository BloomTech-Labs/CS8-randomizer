import React from 'react';
// import { NavLink } from 'react-router-dom';

import { Nav, NavItem, NavLink, Alert, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


export default class SideBar extends React.Component {
    constructor(props) {
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

render(){
        return (
            <div className="SideDiv">
                <Nav vertical>
                    <NavItem>
                        <NavLink href="/Classes" active>Games</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/Billing">Biling</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/Settings">Settings</NavLink>
                    </NavItem>
                </Nav>
        </div>

        )
    }
}

// export default NavBar;
