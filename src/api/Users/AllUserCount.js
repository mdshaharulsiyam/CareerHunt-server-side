const User = require("../../models/User")

const AllUserCount = async (req, res) => {
    const result = await  User.countDocuments()
    res.json(result)
}
module.exports = AllUserCount