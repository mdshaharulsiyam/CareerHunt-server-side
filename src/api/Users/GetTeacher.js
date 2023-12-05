const GetTeacherDB = require("../../lib/CreateUser/GetTeacherDB")

const GetTeacher = async(req,res)=>{
    const result = await GetTeacherDB()
    res.send(result)
}
module.exports = GetTeacher