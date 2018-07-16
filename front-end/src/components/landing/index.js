import React from 'react';
import { Button } from 'reactstrap';

export default class Example extends React.Component {
    constructor (props) {
        super(props);
    
        this.state = { cSelected: [] };
    
        this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
      }
    
      onCheckboxBtnClick(selected) {
        const index = this.state.cSelected.indexOf(selected);
        if (index < 0) {
          this.state.cSelected.push(selected);
        } else {
          this.state.cSelected.splice(index, 1);
        }
        this.setState({ cSelected: [...this.state.cSelected] });
      }
  render() {
    return (
      <div>
        <Button outline black="primary" onClick={() => this.onCheckboxBtnClick(1)} active={this.state.cSelected.includes(1)}>About Magic Randomizer</Button>{' '}
        <Button outline black="secondary" onClick={() => this.onCheckboxBtnClick(2)} active={this.state.cSelected.includes(2)}>Sign Up</Button>{' '}
        <Button outline black="success" onClick={() => this.onCheckboxBtnClick(3)} active={this.state.cSelected.includes(3)}>Log In</Button>{' '}
        {/* <Button outline color="info">info</Button>{' '}
        <Button outline color="warning">warning</Button>{' '}
        <Button outline color="danger">danger</Button> */}
      </div>
    );
  }
}

// export default Landing;