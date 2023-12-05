const TeacherApplicationModel = require("../../models/TeacherApplication")

const requestCount =async (req,res)=>{
    const result = (await TeacherApplicationModel.estimatedDocumentCount()).toString();
    res.send(result)
}
module.exports = requestCount