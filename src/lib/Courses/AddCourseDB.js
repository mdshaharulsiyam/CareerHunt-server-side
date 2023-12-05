const Course = require("../../models/Courses")

const AddCourseDB = async (data) => {
    try {
        const result = await Course.create(data)
        if (result._doc._id) {
            return { success: true };
        }
    } catch (error) {
        return { success: false, error: error };
    }
}
module.exports = AddCourseDB