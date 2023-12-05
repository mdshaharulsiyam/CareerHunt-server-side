const UpdateRequstStatus = require("../../lib/TeacherRequests/UpdateRequstStatus");
const User = require("../../models/User")
const UpdateRequest = async (req, res) => {
    const { useremail} = req.query;
    const query = { useremail: useremail }
    const getUser = await User.findOne(query)
    if (!getUser?.role === 'admin') {
        return res.status(403).send({ msg: 'forbidden access' })
    }
    const { id, status, msg } = req.body;
    const result = await UpdateRequstStatus(id, status, msg)
    res.send(result)
}
module.exports = UpdateRequest