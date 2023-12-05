const TeachersApllications = require("../../lib/TeacherApllication/TeachersApplications");
const User = require("../../models/User");

const TeacherApllication = async (req, res) => {
    const { useremail } = req.query;
    if (req.user.useremail !== useremail) {
        return res.status(403).send({ massage: 'forbidden acces' })
    }
    const query = { useremail: useremail }
    const getUser = await User.findOne(query)
    if (getUser?.role === 'admin') {
        return res.status(403).send({msg : 'forbidden access'})
    }
    const data = req.body;
    const result = await TeachersApllications(data)
    res.send(result)

}
module.exports = TeacherApllication