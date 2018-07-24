import React, {Component} from 'react';
import { Nav, NavItem, NavLink, Dropdown, DropdownMenu, DropdownToggle, Button } from 'reactstrap';

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
            <Dropdown direction="left" id="logout-toggle" size="lg" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle
                    
                    tag="span"
                    onClick={this.toggle}
                    data-toggle="dropdown"
                    aria-expanded={this.state.dropdownOpen}
                >
                    <Button id="logout-button">Logout</Button>
                    {/* TODO: Add onClick(this.props.toggleAuth) - to set authed: false; */}
                </DropdownToggle>
                <DropdownMenu id="logout-dropdown">
                    <div className="logout-link"><a href="/">Confirm</a></div>
                    <div className="logout-link" onClick={this.toggle}>Cancel</div>
                </DropdownMenu>
            </Dropdown>
        );
    }
}