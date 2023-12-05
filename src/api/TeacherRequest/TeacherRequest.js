const GetTeacherRequests = require("../../lib/TeacherRequests/GetTeacherRequests");
const User = require("../../models/User");

const TeacherRequest = async (req, res) => {
    const { useremail,pageNumber,itemPerPage } = req.query;
    const query = { useremail: useremail }
    const getUser = await User.findOne(query)
    if (!getUser?.role === 'admin') {
        return res.status(403).send({msg : 'forbidden access'})
    }
    const result = await GetTeacherRequests(pageNumber,itemPerPage)
    res.send(result)
}
module.exports = TeacherRequest