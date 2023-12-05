const TeacherApplicationModel = require("../../models/TeacherApplication")

const UpdateRequstStatus = async (id, status, msg) => {
    try {
        const filter = { _id: id }
        const query = {
            $set: {
                status: status,
                msg: msg
            }
        }
        const result = await TeacherApplicationModel.updateOne(filter, query)
        if (result.acknowledged) {
            return { success: true };
        }
    } catch (error) {
        return { success: false, error: error };
    }
}
module.exports = UpdateRequstStatus