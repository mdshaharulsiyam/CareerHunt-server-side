const TeacherApplicationModel = require("../../models/TeacherApplication")

const UpdateApplicationForm = async (id, data) => {
    try {
        const filter = { _id: id }
        const query = {
            $set: data
        }
        const result = await TeacherApplicationModel.updateOne(filter, query)
        if (result.acknowledged) {
            return { success: true };
        }
    } catch (error) {
        return { success: false, error: error };
    }

}
module.exports = UpdateApplicationForm