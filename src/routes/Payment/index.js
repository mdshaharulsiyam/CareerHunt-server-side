const Payment = require('../../api/Payment/Payment');

const router = require('express').Router()
router.post("/create-payment-intent",Payment);
module.exports = router