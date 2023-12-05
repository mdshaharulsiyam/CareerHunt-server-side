require('dotenv').config()
const stripe = require("stripe")(process.env.SRTIPE_KEY)
const StripePayment = async(price)=>{
   return await stripe.paymentIntents.create({
        amount: parseInt(price * 100),
        currency: "usd",
        payment_method_types: [
            "card"
        ],
    });
}
module.exports = StripePayment