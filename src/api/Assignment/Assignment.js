const AssignmentDB = require("../../lib/Assignment/AssignmentDB");

const Assignment = async (req, res) => {
    const { useremail,course, student } = req.query;
    if (req.user.useremail !== useremail) {
        return res.status(403).send({ massage: 'forbidden acces' })
    }
    const result = await AssignmentDB(course, student)
    res.send(result)
}
module.exports = Assignment