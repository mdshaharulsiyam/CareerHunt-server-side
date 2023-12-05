const GetUserData = require('../../lib/CreateUser/GetUserData')
const GetUser = async(req,res)=>{
    const { useremail } = req.query;
    if (req.user.useremail !== useremail) {
        return res.status(403).send({massage : 'forbidden acces'})
    }
    const result = await GetUserData(useremail)
    res.send(result)
}
module.exports = GetUser