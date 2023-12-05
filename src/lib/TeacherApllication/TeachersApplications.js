const TeacherApplicationModel = require("../../models/TeacherApplication")

const TeachersApllications = async (data) => {
    try {
        const result = await TeacherApplicationModel.create(data)
        if (result._doc._id) {
            return { success: true };
        }
    } catch (error) {
        return { success: false, error: error };
    }
}
module.exports = TeachersApllications