import "./billing.css";
import React, { Component } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "./checkoutForm";
const {PUBLISH_KEY} = require('./config');


class Billing extends Component {
  render() {
    return (
      <div className="billing">
      <StripeProvider apiKey={PUBLISH_KEY}>
        <div className="example">
          <div className="billing_title">Payment Info</div>
          <Elements className="elements">
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
      </div>
    );
  }
}

export default Billing;
