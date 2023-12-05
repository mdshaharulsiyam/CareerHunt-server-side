const DeteleFeedbackDB = require("../../lib/Feedback/DeteleFeedbackDB");

const DeleteFeedback = async (req, res) => {
    const { useremail, id } = req.query;
    if (req.user.useremail !== useremail) {
        return res.status(403).send({ massage: 'forbidden acces' })
    }
    const result = await DeteleFeedbackDB(id)
    res.send(result)
}
module.exports = DeleteFeedback