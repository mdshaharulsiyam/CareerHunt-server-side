const GetApplications = require("../../lib/TeacherApllication/GetApplications");
const User = require("../../models/User");
const GetApplicationData = async (req, res) => {
    const { useremail } = req.query;
    if (useremail !== req?.user?.useremail) {
        return res.status(403).send({ msg: 'forbidden access' })
    }
    const getUser = await User.findOne({ useremail: useremail })
    if (!getUser?.role === 'admin') {
        return res.status(403).send({ msg: 'forbidden access' })
    }
    const result = await GetApplications(useremail)
    res.send(result)
}
module.exports = GetApplicationData