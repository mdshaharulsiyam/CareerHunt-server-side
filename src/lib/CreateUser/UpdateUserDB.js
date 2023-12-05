const User = require("../../models/User")

const UpdateUserDB = async (id, phone) => {
    const filter = { _id: id }
    const query = {
        $set: {
            phone: phone
        }
    }
    return await User.updateOne(filter,query)
}
module.exports = UpdateUserDB