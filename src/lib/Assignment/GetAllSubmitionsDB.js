const SubmitAssignment = require("../../models/SubmitAssignment");

const GetAllSubmitionsDB = async (course) => {
    try {
        return await SubmitAssignment.find({ course: course ,"status": "pending"}).populate({
            path: 'assignment',
            select: '_id title'
        }).populate({
            path: 'student',
            select: '_id username profileImage useremail'
        });

    } catch (error) {
        return { success: false, error: error };
    }
}
module.exports = GetAllSubmitionsDB