const GetFeedBacksDB = require("../../lib/Feedback/GetFeedBacksDB");

const GetFeedBacks = async (req, res) => {
    const { useremail, id } = req.query;
    if (req.user.useremail !== useremail) {
        return res.status(403).send({ massage: 'forbidden acces' })
    }
    const result = await GetFeedBacksDB(id)
    res.send(result)
}
module.exports = GetFeedBacks