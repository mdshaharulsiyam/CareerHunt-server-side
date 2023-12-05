const Course = require("../../models/Courses")

const CourseCount = async (req, res) => {
    const result = await Course.countDocuments({ status: 'approved' })
    res.json(result)
}
module.exports = CourseCount