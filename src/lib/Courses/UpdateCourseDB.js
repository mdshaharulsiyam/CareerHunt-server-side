const Course = require("../../models/Courses")

const UpdateCourseDB = async (data, id) => {
    try {
        const filter = {
            _id: id
        }
        const query = {
            $set: {
                ...data
            }
        }
        const result = await Course.updateOne(filter, query)
        if (result.acknowledged) {
            return { success: true };
        }
    } catch (error) {
        return { success: false, error: error };
    }

}
module.exports = UpdateCourseDB