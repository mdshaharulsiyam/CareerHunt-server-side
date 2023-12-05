const TeacherApplicationModel = require("../../models/TeacherApplication")
const User = require("../../models/User")

const ApproveTeacher = async (userid, requestid, skils) => {
    try {
        const filterUser = { _id: userid }
        const query = {
            $set: {
                role: 'teacher',
                skils: skils
            }
        }
        const update = await User.updateOne(filterUser, query)
        const filterrequest = { _id: requestid }
        const deleterequest = await TeacherApplicationModel.deleteOne(filterrequest)
        if (update.acknowledged) {
            return { success: true };
        }
    } catch (error) {
        return { success: false, error: error };
    }
}
module.exports = ApproveTeacher