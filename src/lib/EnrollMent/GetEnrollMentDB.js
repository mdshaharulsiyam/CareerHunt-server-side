const Enroll = require("../../models/Enroll");

const GetEnrollMentDB = async (id) => {
    try {
        return await Enroll.find({ student: id })
            .populate({
                path: 'student',
                select: ' _id'
            })
            .populate({
                path: 'course',
                populate: { path: 'teacher', select: '_id username' },
                select: 'title description img'
            })
            .select('course TransactionId');
    } catch (error) {
        return { success: false, error: error };
    }
}
module.exports = GetEnrollMentDB