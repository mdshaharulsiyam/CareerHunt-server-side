const User = require("../../models/User")

const GetTeacherDB = async () => {
    try {
        return await User.find({ role: 'teacher' })
    } catch (error) {
        return { success: false, error: error };
    }
}
module.exports = GetTeacherDB