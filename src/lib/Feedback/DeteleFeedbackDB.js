const FeedBack = require("../../models/FeedBack")

const DeteleFeedbackDB = async (id) => {
    try {
        const result = await FeedBack.deleteOne({ _id: id })
        if (result.acknowledged) {
            return { success: true };
        }
    } catch (error) {
        return { success: false, error: error };
    }
}
module.exports = DeteleFeedbackDB