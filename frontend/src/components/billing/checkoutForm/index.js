import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import { Button} from "reactstrap";
import "./checkoutForm.css"

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false
    };
    this.submitPayment = this.submitPayment.bind(this);
  }

  async submitPayment(ev) {
    let { token } = await this.props.stripe.createToken({
      name: "Finigus T. Barth"
    });
    let response = await fetch("http://localhost:5000/api/charge", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: token.id
    });

    if (response.ok) {
      this.setState({ complete: true });
      alert("Congratulations! Your payment has been successfully sent!");
    }
  }

  render() {
    if (this.state.complete) {
      return <h1>Purchase Complete</h1>;
    } else {
      console.log("Error");
    }
    return (
      <div className="checkout">
        <CardElement />
        <label check className="checkout_subscribe">
        <input type="checkbox" className="subscribe_input" />
          1 Year Subscription - $9.99
          
          <br />
          <input type="checkbox" className="subscribe_input" />
          1 Year Premium Subscription - $29.99
          
        </label>
        <br />
        <Button onClick={this.submitPayment} className="checkout_button">Buy Now</Button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
