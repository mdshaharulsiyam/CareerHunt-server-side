const TeacherApplicationModel = require("../../models/TeacherApplication")

const GetApplications = async (useremail) => {
  try {  
    return TeacherApplicationModel
    .aggregate([
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
                'requestedUser.useremail': useremail,
            }
        },
        {
            $project: {
                _id: 1,
                category: 1,
                experience: 1,
                status: 1,
                title: 1,
                msg : 1,
                'requestedUser._id': 1,
                'requestedUser.profileImage': 1,
                'requestedUser.useremail': 1
            }
        }
    ])
    
  } catch (error) {
    return { success: false, error: error };
  }
}
module.exports = GetApplications