const TeacherApplicationModel = require("../../models/TeacherApplication")
const GetTeacherRequests = async (pageNumber, itemPerPage) => {
   try {
    return await TeacherApplicationModel.aggregate([
        {
            $lookup: {
                from: 'users',
                localField: 'requestedUser',
                foreignField: '_id',
                as: 'requestedUser'
            }
        },
        {
            $match: {
                'status': 'pending'
            }
        },
        {
            $project: {
                _id: 1,
                category: 1,
                experience: 1,
                status: 1,
                title: 1,
                'requestedUser._id': 1,
                'requestedUser.profileImage': 1,
                'requestedUser.username': 1
            }
        }
    ]).skip(parseInt(pageNumber) * parseInt(itemPerPage)).limit(parseInt(itemPerPage))
   } catch (error) {
    return { success: false, error: error };
   }
}
module.exports = GetTeacherRequests