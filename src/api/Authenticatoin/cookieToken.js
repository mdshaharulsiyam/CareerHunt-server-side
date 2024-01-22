const jwt = require("jsonwebtoken");
const createToken = require("../../lib/authentication/createToken");
require('dotenv').config()
const CookieToken = async (req, res) => {
    const userData = req.body;
    console.log(userData,'setting cockie');
    if (!userData?.useremail) {
        return res.send({ succes: false })
    }
    const token = await createToken(userData)
    res.cookie('token', token, {
        httpOnly: true,
        secure: true,
        sameSite: 'none'
    })
        .send({ succes: true })
}
module.exports = CookieToken