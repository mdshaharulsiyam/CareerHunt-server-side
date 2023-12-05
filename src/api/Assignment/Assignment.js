const AssignmentDB = require("../../lib/Assignment/AssignmentDB");

const Assignment = async (req, res) => {
    const { useremail,id } = req.query;
    if (req.user.useremail !== useremail) {
        return res.status(403).send({ massage: 'forbidden acces' })
    }
    const result = await AssignmentDB(id)
    res.send(result)
}
module.exports = Assignment