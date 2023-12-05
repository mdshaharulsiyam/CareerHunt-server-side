const Assignment = require("../../models/Assignment")
const Course = require("../../models/Courses")

const AddAssignmentDB = async (data) => {
    try {
        const update = await Course.updateOne(
            { _id: data.course },
            { $inc: { totalassignment: 1 } })
        const result = await Assignment.create(data)
        if (result._doc._id) {
            return { success: true };
        }
    } catch (error) {
        return { success: false, error: error };
    }
}
module.exports = AddAssignmentDB