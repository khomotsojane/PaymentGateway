const express = require("express");
const stripe = require("stripe")("API key from Stripe");
const app = express();
const port = 3020;

app.use(express.json());


app.post("/process-payment", async (req, res) => {
  try {
    const { amount, currency, token } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      payment_method: token,
      confirmation_method: "manual",
      confirm: true,
    });

    res.json({ success: true, message: "Payment processed successfully" });
  } catch (error) {
    console.error("Error processing payment:", error.message);
    res.status(500).json({ success: false, message: "Payment failed" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
