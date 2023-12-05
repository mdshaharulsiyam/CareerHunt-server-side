const ApproveTeacher = require("../../lib/TeacherRequests/ApproveTeacher");
const User = require("../../models/User");

const SetTeacher = async (req, res) => {
    const { useremail } = req.query;
    const query = { useremail: useremail }
    const getUser = await User.findOne(query)
    if (!getUser?.role === 'admin') {
        return res.status(403).send({ msg: 'forbidden access' })
    }
    const { userid, requestid, skils } = req.body;
    const result = await ApproveTeacher(userid, requestid, skils)
    res.send(result)
}
module.exports = SetTeacher