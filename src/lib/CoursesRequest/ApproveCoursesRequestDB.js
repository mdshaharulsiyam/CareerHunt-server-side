const Course = require("../../models/Courses")

const ApproveCoursesRequestDB = async (id, status) => {
    try {
        const filter = { _id: id }
        const query = {
            $set: {
                status: status
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
module.exports = ApproveCoursesRequestDB