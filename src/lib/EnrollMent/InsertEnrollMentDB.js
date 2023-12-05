const Course = require("../../models/Courses")
const Enroll = require("../../models/Enroll")

const InsertEnrollMentDB = async (data) => {
    const { course } = data;

    try {
        await Course.updateOne(
            { _id: course },
            { $inc: { totalenroll: 1 } }
        );
        const result = await Enroll.create(data);
        if (result._doc._id) {
            return { success: true };
        }
    } catch (error) {
        return { success: false, error: error };
    }


}
module.exports = InsertEnrollMentDB