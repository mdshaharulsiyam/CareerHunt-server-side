const AddAssignmentDB = require("../../lib/Assignment/AddAssignmentDB");

const AddAssignment = async (req, res) => {
    const { useremail } = req.query;
    if (req.user.useremail !== useremail) {
        return res.status(403).send({ massage: 'forbidden acces' })
    }
    const data = req.body;
    const result = await AddAssignmentDB(data)
    res.send(result)
}
module.exports = AddAssignment