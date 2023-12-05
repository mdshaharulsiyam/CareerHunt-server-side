const User = require("../../models/User")

const GetAllUserDB = async (useremail, seacrhValue, itemPerPage, pageNumber) => {
    try {
        const requestedUser = await User.findOne({ useremail: useremail })
        if (requestedUser.role !== 'admin') {
            return res.status(403).send({ massage: 'forbidden access' })
        }
        const query = { role: { $regex: `${seacrhValue}`, $options: 'i' } };
        return await User.find(query).skip(parseInt(pageNumber) * parseInt(itemPerPage)).limit(parseInt(itemPerPage));
    } catch (error) {
        return { success: false, error: error };
    }
}
module.exports = GetAllUserDB