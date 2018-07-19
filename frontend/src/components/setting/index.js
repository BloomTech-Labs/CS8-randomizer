import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';



export default class Settings extends React.Component{
    render() {
      return (
        <Form>
          <FormGroup>
            <Label for="userEmail">Email:</Label>
            <Input type="email" name="email" id="userEmail" placeholder="Enter your email here" />
          </FormGroup>
          <FormGroup>
            <Label for="userPassword">Old Password</Label>
            <Input type="password" name="password" id="userPassword" placeholder=" Enter your old password here " />
          </FormGroup>
          <FormGroup>
            <Label for="userPassword">New Password</Label>
            <Input type="password" name="password" id="userPassword" placeholder=" Enter your new password here " />
          </FormGroup>
          
            
          
          <Button>Save</Button>
        </Form>
      );
    }
  }