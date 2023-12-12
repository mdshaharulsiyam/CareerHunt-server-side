const SubmitAssignment = require("../../models/SubmitAssignment");

const MarkDB = async (id, data) => {
    try {
        const filter = { _id: id }
        const query = {
            $set: {
                ...data
            }
        }
        const result = await SubmitAssignment.updateOne(filter, query)
        if (result.acknowledged) {
            return { success: true };
        }
    } catch (error) {
        return { success: false, error: error };
    }
}
module.exports = MarkDB