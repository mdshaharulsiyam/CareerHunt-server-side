const GetSubmitedAssignmentDB = require("../../lib/Assignment/GetSubmitedAssignmentDB");

const GetSubmitedAssignment = async(req,res)=>{
    const { useremail,course, student } = req.query;
    console.log('linkhited',req.query);
    if (req.user.useremail !== useremail) {
        return res.status(403).send({ massage: 'forbidden acces' })
    }
    const result = await GetSubmitedAssignmentDB(course, student)
    res.send(result)
}
module.exports = GetSubmitedAssignment