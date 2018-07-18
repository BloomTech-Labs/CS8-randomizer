import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



        export default class Setting extends React.Component{
          constructor(props) {
            super(props);
            this.state = {
              email:'',
              password:''
            };
          }       
            render() {
            return (
                <div>
                <h3>Billing</h3>
                <Form>
                    <h5>Payment info</h5>
                  <div className ="FormGroup">
                    <Label for="Credit-card">CC#: </Label>
                    <Input type="text"  id="card-number"  class ="form control" required/>
                    </div>
                    <div className ="FormGroup">
                    <Label for="expiration-month">Expiration month: </Label>
                    <Input type="text"  id="Expiration-month"  class ="form control" required/>
                    </div>
                    <div className ="FormGroup">
                    <Label for="Expiration-year">Expiration year: </Label>
                    <Input type="text"  id="Expiration-year"  class ="form control" required/>
                    </div>
                    <div className ="FormGroup">
                    <Label for="CVV">CVV#: </Label>
                    <Input type="text"  id="CVV"  class ="form control" required/>
                    </div>
                    <FormGroup check>
                    <Label check>
                    <Input type="checkbox" />{' '}
                    1 Year Subscription -$ 9.99
                    </Label>
                    </FormGroup>
                    <FormGroup check>
                    <Label check>
                    <Input type="checkbox" />{' '}
                    1 Year Premium Subscription -$ 29.99
                    </Label>
                    </FormGroup>
                    
                    
                  
                  <Button>BUY NOW</Button>
                </Form>
                </div>
              );
            }
          }
        