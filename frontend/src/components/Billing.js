
import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import './stripe.css';
 
export default class Billing extends React.Component {
  onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  }
 
  
 
  render() {
    return (
      // ...
      <StripeCheckout
        token={this.onToken}

        stripeKey="pk_live_eL39XfKV3dh9k5mk8Lxch3Yc"
        className = 'stripe'

      />
    )
  }
}