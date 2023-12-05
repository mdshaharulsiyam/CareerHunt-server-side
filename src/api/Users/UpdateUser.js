const UpdateUserDB = require("../../lib/CreateUser/UpdateUserDB")

const UpdateUser = async(req,res)=>{
    const {useremail}=req.query
    if (req.user.useremail !== useremail) {
        return res.status(403).send({massage : 'forbidden acces'})
    }
    const {id,phone}=req.body
try {
    const result = await UpdateUserDB(id,phone)
    if (result) {
        res.send({sucsess : true})
    }
} catch (error) {
    res.send({sucsess : false,Error : error})
}
}
module.exports = UpdateUser