const AddCourseDB = require("../../lib/Courses/AddCourseDB");

const AddCourse = async (req, res) => {
    const { useremail } = req.query;
    if (req.user.useremail !== useremail) {
        return res.status(403).send({ massage: 'forbidden acces' })
    }
    const data = req.body;
    const result = await AddCourseDB(data)
    res.send(result)
}
module.exports = AddCourse