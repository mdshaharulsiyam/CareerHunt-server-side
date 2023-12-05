const FeedBackDB = require("../../lib/Feedback/FeedBackDB");

const FeedBack = async (req, res) => {
    const { useremail } = req.query;
    if (req.user.useremail !== useremail) {
        return res.status(403).send({ massage: 'forbidden acces' })
    }
    const data = req.body
    const result = await FeedBackDB(data)
    res.send(result)
}
module.exports = FeedBack