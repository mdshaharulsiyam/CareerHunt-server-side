const SubmitAssignment = require("../../models/SubmitAssignment");

const GetSubmitedAssignmentDB = async (course, student) => {
    try {
        return await SubmitAssignment.find({ course: course, student: student }).populate({
            path: 'assignment',
            select: '_id title'
        });

    } catch (error) {
        return { success: false, error: error };
    }
}
module.exports = GetSubmitedAssignmentDB