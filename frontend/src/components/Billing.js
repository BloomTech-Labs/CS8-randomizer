
import { CardForm, PaymentMethods } from 'react-payment';
import React from 'react'
import Dialog from 'material-ui/Dialog';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Stripe} from 'react-stripe-elements'; 
 
let loadedStripe = false;
 
export default class Billing extends React.Component {
 
  state = {
    dialogOpen: false,
    cardDialog: true
  };
 
  componentWillMount() {
    if (loadedStripe) {
      return;
    }
 
    loadedStripe = true;
  }
 
  openDialog = (type) => {
    this.setState({
      dialogOpen: true,
      cardDialog: type === 'card' ? true : false
    });
  };
 
  closeDialog = () => {
    this.setState({dialogOpen: false});
  };
 
 
 
  onSubmitCard = (card) => {
    const { number, exp_month, exp_year, cvc, name, zip } = card;
    Stripe.card.createToken({
      number,
      exp_month,
      exp_year,
      cvc,
      name,
      address_zip: zip
    }, (status, response) => {
      if (response.error) {
        alert('Adding card failed with error: ' + response.error.message)
      } else {
        const cardToken = response.id;
        this.closeDialog();
        // show success message
      }
    });
  };
 
  
 
  render() {
 
    return (
      <MuiThemeProvider>
        <PaymentMethods
          showCards={true}
          cards={[{ id: '1', last4: '1234', brand: 'visa' }]}
          />
          
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
                    <Label for="CVV">CVC#: </Label>
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
        
       
          }
        
      </MuiThemeProvider>
    );
  }
}


