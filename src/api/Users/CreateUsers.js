const CreatenewUser = require("../../lib/CreateUser/CreatenewUser");

const CreateUsers = async (req, res) => {
    const userData = req.body;
    const result = await CreatenewUser(userData)
    res.send(result)
}
module.exports = CreateUsers