const Course = require("../../models/Courses");
const SubmitAssignment = require("../../models/SubmitAssignment");

const CourceSammeryDB = async (id, targetDate) => {
    const course = await Course.findOne({ _id: id })
        .select('title price img totalenroll teacher description totalassignment');
    const totalSubmitions = await SubmitAssignment.countDocuments({
        course: id,
        submittime: targetDate
    })
    return { course, totalSubmitions }
}
module.exports = CourceSammeryDB