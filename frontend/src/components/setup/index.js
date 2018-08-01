import React, { Component } from 'react';
import { connect } from "react-redux";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { editUser } from "../../actions";

import './setup.css'

class Setup extends Component{
  constructor(props){
    super(props)
    this.state = {
        email: "",
        password: ""
    };
}

handleInputChange = event => {
  console.log("handleInputChange");
  event.preventDefault();
  this.setState({ [event.target.name]: event.target.value });
};

handleSubmit = () => {
  const {email, password} = this.state
  this.props.editUser({email, password})
}
    render(){
        return(
            <div className='set-div'>
            <Form>
              <FormGroup>
                <Label for="userEmail">Email: </Label>
                <Input type="email" name="email" id="userEmail" placeholder="Enter your email here and 'Save' to Update" onChange={this.handleInputChange}/>
              </FormGroup>
              <FormGroup>
                <Label for="userPassword">Old Password</Label>
                <Input type="password" name="password" id="userPassword" placeholder=" Enter your old password here " onChange={this.handleInputChange}/>
              </FormGroup>
              <FormGroup>
                <Label for="userPassword">New Password</Label>
                <Input type="password" name="password" id="userPassword" placeholder=" Enter your new password here " onChange={this.handleInputChange}/>
              </FormGroup>
             
                
              
              <Button onClick={this.handleSubmit}>Save</Button>
            </Form>
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    
  };
};

export default connect(
  mapStateToProps,
  { editUser }
)(Setup);