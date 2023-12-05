const Course = require("../../models/Courses")

const GetBestCourses = async()=>{
   try {
    return await Course.find()
    .sort({ totalenroll: -1 }) 
    .limit(6) 
    .populate({
        path: 'teacher',
        select: '_id username'
    })
    .select('title price img totalenroll teacher description');
   } catch (error) {
    return { success: false, error: error };
   }
}
module.exports = GetBestCourses