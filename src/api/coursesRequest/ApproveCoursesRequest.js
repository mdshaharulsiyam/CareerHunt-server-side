const ApproveCoursesRequestDB = require("../../lib/CoursesRequest/ApproveCoursesRequestDB");
const User = require("../../models/User");
const ApproveCoursesRequest = async (req, res) => {
    const { useremail } = req.query;
    if (req.user.useremail !== useremail) {
        return res.status(403).send({ massage: 'forbidden acces' })
    }
    const getUser = await User.findOne({ useremail: useremail })
    if (!getUser?.role === 'admin') {
        return res.status(403).send({ msg: 'forbidden access' })
    }
    const {id,status} = req.body;
    const result = await ApproveCoursesRequestDB(id,status)
    res.send(result)
}
module.exports = ApproveCoursesRequest