const FeedBack = require("../../models/FeedBack")

const GetFeedBacksDB = async (id) => {
    try {
        return await FeedBack.find({ course: id })
    } catch (error) {
        return { success: false, error: error };
    }
}
module.exports = GetFeedBacksDB