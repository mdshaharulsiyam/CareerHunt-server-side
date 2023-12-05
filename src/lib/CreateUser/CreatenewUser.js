const User = require("../../models/User")

const CreatenewUser = async (userData)=>{
    const query = { useremail: userData?.useremail }
    const exsitingUser = await User.findOne(query)
    if (exsitingUser?.useremail) {
        return exsitingUser
    }
    return await User.create(userData)
}
module.exports = CreatenewUser