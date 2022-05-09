const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

const Stripe = require("stripe");
const stripe = Stripe(
  "sk_test_51KxVHeSEP6FLIygg7QBKnV94Mj94cu38vqJV3AZu3jgaLpoa5ZHjUM5YdZe1RpPrAI2ZaOA5B0Zf6XJNAkdEhMEG00m6TFYLHF"
);

router.post("/placeorder", async (req, res) => {
  const { token, subTotal, currentUser, cartItems } = req.body;
  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    const payment = await stripe.charges.create(
      {
        amount: subTotal * 100,
        currency: "inr",
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      },
      function (err, charge) {
        // asynchronously called
      }
    );
    if (payment) {
      res.send("payment successful");
    } else {
      res.send("payment failed");
    }
  } catch (error) {
    res.status(400).json({
      message: "Something went wrong",
      error: error.stack,
    });
  }
});

module.exports = router;
