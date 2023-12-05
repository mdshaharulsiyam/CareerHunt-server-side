const SingleCourseDB = require("../../lib/Courses/SingleCourseDB");

const SingleCourse = async(req,res)=>{
    const {id}=req.query;
    const result =await SingleCourseDB(id)
    res.send(result)
}
module.exports = SingleCourse