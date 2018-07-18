import React, {Component} from 'react';
import { Nav, NavItem, NavLink, Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';

import './index.css';

export default class LogOut extends React.Component{

    constructor(props){
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
        return(
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle
                    tag="span"
                    onClick={this.toggle}
                    data-toggle="dropdown"
                    aria-expanded={this.state.dropdownOpen}
                >
                    Logout
                </DropdownToggle>
                <DropdownMenu>
                    <div><a href="/">Confirm</a></div>
                    <div onClick={this.toggle}>Cancel</div>
                </DropdownMenu>
            </Dropdown>
        );
    }
}