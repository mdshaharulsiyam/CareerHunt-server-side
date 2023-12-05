const SubmitAssignmentDB = require("../../lib/Assignment/SubmitAssignmentDB");

const SubmitAssignment = async (req, res) => {
    const { useremail } = req.query;
    if (req.user.useremail !== useremail) {
        return res.status(403).send({ massage: 'forbidden acces' })
    }
    const data = req.body;
    const result = await SubmitAssignmentDB(data)
    res.send(result)
}
module.exports = SubmitAssignment