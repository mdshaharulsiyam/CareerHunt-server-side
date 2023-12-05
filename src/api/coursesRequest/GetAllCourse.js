const GetAllCoursesDB = require("../../lib/CoursesRequest/GetAllCoursesDB");

const GetAllCourse = async (req, res) => {
    const { useremail, filter, pageNumber, itemPerPage } = req.query;
    if (req.user.useremail !== useremail) {
        return res.status(403).send({ massage: 'forbidden acces' })
    }
    const result = await GetAllCoursesDB(filter, pageNumber, itemPerPage,useremail)
    res.send(result)
}
module.exports = GetAllCourse