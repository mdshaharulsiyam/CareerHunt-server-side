const UpdateCourseDB = require("../../lib/Courses/UpdateCourseDB");

const UpdateCourse = async (req, res) => {
    const { useremail, id } = req.query;
    if (req.user.useremail !== useremail) {
        return res.status(403).send({ massage: 'forbidden acces' })
    }
    const data = req.body;
    const result = await UpdateCourseDB(data, id)
    res.send(result)
}
module.exports = UpdateCourse