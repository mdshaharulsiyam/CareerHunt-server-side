const GetAllSubmitionsDB = require("../../lib/Assignment/GetAllSubmitionsDB");

const GetAllSubmitions = async(req,res)=>{
    const { useremail,course} = req.query;
    if (req.user.useremail !== useremail) {
        return res.status(403).send({ massage: 'forbidden acces' })
    }
    const result = await GetAllSubmitionsDB(course)
    res.send(result)
}
module.exports = GetAllSubmitions