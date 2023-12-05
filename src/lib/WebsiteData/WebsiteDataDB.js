const Course = require("../../models/Courses")
const User = require("../../models/User")

const WebsiteDataDB = async () => {
   try {
    const totalUser = await User.countDocuments()
    const totalcourse = await Course.countDocuments()
    const totalEnrolment = await Course.aggregate([
        {
            $group: {
                _id: null, totalEnroll: { $sum: '$totalenroll' }
            }
        }
    ])

    return {
        totalUser, totalcourse, totalEnrolment
    }
   } catch (error) {
    return { success: false, error: error };
   }
}
module.exports = WebsiteDataDB