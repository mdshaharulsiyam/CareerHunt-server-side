const Enroll = require("../../models/Enroll");
const GetSingleEnrollDB = async (id, student) => {
    try {
        return await Enroll.find({ course: id, student: student })
            .populate({
                path: 'student',
                select: ' _id'
            })
            .populate({
                path: 'course',
                populate: { path: 'teacher', select: '_id username' },
                select: 'title description img'
            })
            .select('TransactionId');
    } catch (error) {
        return { success: false, error: error };
    }
}
module.exports = GetSingleEnrollDB