const Course = require("../../models/Courses")

const SingleCourseDB = async (id) => {

    return await Course.findOne({_id : id})
        .populate({
            path: 'teacher',
            select: '_id username profileImage skils useremail'
        })
        .select('title price img totalenroll teacher description');
}
module.exports = SingleCourseDB