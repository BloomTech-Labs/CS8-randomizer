import React, { Component } from 'react';

import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class Setup extends Component{

    render(){
        return(
            <div>
            <Form>
              <FormGroup>
                <Label for="userEmail">Email: </Label>
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
            </div>
        );
    }
}

export default Setup;