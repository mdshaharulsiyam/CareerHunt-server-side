const Course = require("../../models/Courses")

const DeleteCourseDB = async (id) => {
    try {
        const result = await Course.deleteOne({ _id: id })
        if (result.acknowledged) {
            return { success: true };
        }
    } catch (error) {
        return { success: false, error: error };
    }
}
module.exports = DeleteCourseDB