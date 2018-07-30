import React from 'react';
import { Nav, NavItem, NavLink, Button, ButtonGroup, Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import './index.css';

export default class BottomMenu extends React.Component {

    constructor (props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { cSelected: [], dropdownOpen: false };
    
        this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
      }
    
      onRadioBtnClick(rSelected) {
        this.setState({ rSelected });
      }

      toggle() {
          this.setState({
              dropdownOpen: !this.state.dropdownOpen
          })
      }
    

    render(){
        return (
            <div className='bottomDiv'>
                <Nav>
                    <ButtonGroup id='buttonGroup'>
                        <Button id='sideBarButtonA' onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>
                            <NavItem >
                                <NavLink href="/classes" active>Classes</NavLink>
                            </NavItem>
                        </Button >
                        <Button id='sideBarButtonB' onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>
                            <NavItem >
                                <NavLink href="/billing">Billing</NavLink>
                            </NavItem>
                        </Button>
                        <Button id='sideBarButtonC' onClick={() => this.onRadioBtnClick(3)} active={this.state.rSelected === 3}>
                            <NavItem >
                                <NavLink href="/settings">Settings</NavLink>
                            </NavItem>
                        </Button>
                        <Button id='sideBarButtonD' onClick={() => this.onRadioBtnClick(4)} active={this.state.rSelected === 4}>
                            <Dropdown direction="up" size="lg" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                <DropdownToggle
                                    
                                    tag="span"
                                    onClick={this.toggle}
                                    data-toggle="dropdown"
                                    aria-expanded={this.state.dropdownOpen}
                                >
                                    <Button>Logout</Button>
                                    {/* TODO: Add onClick(this.props.toggleAuth) - to set authed: false; */}
                                </DropdownToggle>
                                <DropdownMenu id='logoutToggleBottom'>
                                    <div id='buttomButton'><a href="/">Confirm</a></div>
                                    <div id='buttomButton' onClick={this.toggle}>Cancel</div>
                                </DropdownMenu>
                            </Dropdown>
                        </Button>
                    </ButtonGroup>
                </Nav>
                </div>
        )
    }
}