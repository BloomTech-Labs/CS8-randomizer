import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import { Button} from "reactstrap";
import "./checkoutForm.css"
import { connect } from "react-redux";
import { editUser } from "../../../actions";

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false,
      toggle_stand_sub: false
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
      this.props.editUser({subscription: "standard"})
    }
  }

 checkbox_one_handler = () => {
    const update = !this.state.toggle_stand_sub
    this.setState ({
      toggle_stand_sub: update
    })
    console.log('this.state.toggle_stand_sub:', this.state.toggle_stand_sub)
  }
  

  render() {
    if (this.state.complete) {
      return <h1>Purchase Complete</h1>;
    } else {
      console.log("Error");
    }
    // console.log('this.state.toggle_stand_sub:', this.state.toggle_stand_sub)
    return (
      <div className="checkout">
        <CardElement id="CardElement" style={{base: {fontSize: '16px', fontFamily: 'Times', color: 'black'}}}/>
        <label check className="checkout_subscribe">
        <input type="checkbox" className="subscribe_input" onChange={this.checkbox_one_handler} />
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


const mapStateToProps = state => {
  return {
  };
};

export default
  connect(
    mapStateToProps,
    { editUser }
  )(injectStripe(CheckoutForm));
