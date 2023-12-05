const DeleteCourseDB = require("../../lib/CoursesRequest/DeleteCourseDB");

const DeleteRequest = async (req, res) => {
    const { useremail,id } = req.query;
    if (req.user.useremail !== useremail) {
        return res.status(403).send({ massage: 'forbidden acces' })
    }

    const result = await DeleteCourseDB(id)
    res.send(result)

}
module.exports = DeleteRequest