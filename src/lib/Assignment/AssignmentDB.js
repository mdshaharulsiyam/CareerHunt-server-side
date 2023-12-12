const Assignment = require("../../models/Assignment")
const SubmitAssignment = require('../../models/SubmitAssignment')
const AssignmentDB = async (course, student) => {
    try {
        const exising = await SubmitAssignment.find({ course: course, student: student }).select('assignment');
        const allAssignments = await Assignment.find({ course: course })
            .populate({
                path: 'course',
                select: '_id title img'
            })
            .populate({
                path: 'teacher',
                select: 'username useremail'
            })
            .select('title deadline description');
        const data = allAssignments.filter(item => !exising.map(existingItem => existingItem.assignment.toString()).includes(item._id.toString()));
        return data
    } catch (error) {
        return { success: false, error: error };
    }
}
module.exports = AssignmentDB