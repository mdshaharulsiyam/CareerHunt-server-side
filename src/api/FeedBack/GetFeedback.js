const FeedBack = require("../../models/FeedBack")

const GetFeedback = async (req, res) => {
    const result = await FeedBack.find({}).sort({ rating: -1 }).limit(10)
    res.send(result)
}
module.exports = GetFeedback