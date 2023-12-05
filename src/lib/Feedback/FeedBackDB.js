const FeedBack = require("../../models/FeedBack")

const FeedBackDB = async (data) => {
    try {
        const result = await FeedBack.create(data)
        if (result._doc._id) {
            return { success: true };
        }
    } catch (error) {
        return { success: false, error: error };
    }
}
module.exports = FeedBackDB