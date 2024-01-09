// server.js
const express = require("express");
const stripe = require("stripe")("sk_test_51OUsyaJ22JPCn5AcRHbRJXwaI2KdM3jOhA2FEHx27HS7lXwveRvDLxDoTWTAwFMV06fToqOATKLtCjnZeWU1azu400QYaPk8Oq");
const app = express();
const port = 3020;

app.use(express.json());

// Route to handle payment requests
app.post("/process-payment", async (req, res) => {
  try {
    const { amount, currency, token } = req.body;

    // Create a payment intent using the Stripe API
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      payment_method: token,
      confirmation_method: "manual",
      confirm: true,
    });

    // If the payment was successful, respond with a success message
    res.json({ success: true, message: "Payment processed successfully" });
  } catch (error) {
    console.error("Error processing payment:", error.message);
    res.status(500).json({ success: false, message: "Payment failed" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
