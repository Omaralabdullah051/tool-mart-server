const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const paymentController = async (req, res) => {
  const { price } = req.body;
  const amount = price * 100;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "usd",
    payment_method_types: ["card"],
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};

module.exports = paymentController;
