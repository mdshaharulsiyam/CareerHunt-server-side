const GetBestCourses = require("../../lib/Courses/GetBestCourses")

const BestCourses = async(req,res)=>{
    const result = await GetBestCourses()
    res.send(result)
}
module.exports = BestCourses