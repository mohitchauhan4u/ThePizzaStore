import React from "react";
import { Button } from "react-bootstrap";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch } from "react-redux";

const Checkout = ({ subTotal }) => {
  const tokenHandler = (token) => {
    console.log(token);
  };
  return (
    <StripeCheckout
      amount={subTotal * 100}
      shippingAddress
      token={tokenHandler}
      stripeKey="pk_test_51KxVHeSEP6FLIyggEWYhuUXPNtcz3JnPIYYRoc2L0EWZNPvGGpBZj60tOHEBKiuQl97wBwldo7ycPwm4t8syqCAX00vRWsKHmK"
      currency="INR"
    >
      <Button>Pay Now</Button>
    </StripeCheckout>
  );
};

export default Checkout;
