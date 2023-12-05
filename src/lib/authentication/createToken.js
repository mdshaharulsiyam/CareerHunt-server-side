const jwt = require("jsonwebtoken");
require('dotenv').config()
const createToken = async (userData) => {
    const token = await jwt.sign(userData, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '5h' });

    return token;
}

module.exports = createToken