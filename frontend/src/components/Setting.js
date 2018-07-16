import React, {Component} from react;
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



        export default class Setting extends React{
            render() {
              return (
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
              );
            }
          }