const User = require("../../models/User")

const MakeAdminDB = async (useremail, id) => {
    try {
        const requestedUser = await User.findOne({ useremail: useremail })
        if (requestedUser.role !== 'admin') {
            return res.status(403).send({ massage: 'forbidden access' })
        }
        const filter = { _id: id }
        const query = {
            $set: {
                role: 'admin'
            }
        }
        const result = await User.updateOne(filter, query)
        if (result.acknowledged) {
            return { success: true };
        }
    } catch (error) {
        return { success: false, error: error };
    }
}
module.exports = MakeAdminDB