const StripePayment = require("../../lib/Payment/StripePayment");

const Payment = async (req, res) => {
    const { price } = req.body;
    const paymentIntent = await StripePayment(price)
    
    res.send({
        clientSecret: paymentIntent.client_secret,
    });
}
module.exports = Payment