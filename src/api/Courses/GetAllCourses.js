const GetAllCoursesDB = require("../../lib/Courses/GetAllCoursesDB")

const GetAllCourses = async(req,res)=>{
    const {limit,search}=req.query;
    const result =await GetAllCoursesDB(limit,search)
    res.send(result)
}
module.exports = GetAllCourses