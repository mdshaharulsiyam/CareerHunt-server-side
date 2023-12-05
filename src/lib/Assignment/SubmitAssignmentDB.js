const SubmitAssignment = require("../../models/SubmitAssignment")

const SubmitAssignmentDB = async (data) => {
    try {
        const result = await SubmitAssignment.create(data)
        if (result._doc._id) {
            return { success: true };
        }
    } catch (error) {
        return { success: false, error: error };
    }
}
module.exports = SubmitAssignmentDB