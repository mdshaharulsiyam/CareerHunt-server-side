const UpdateApplicationForm = require("../../lib/TeacherApllication/UpdateApplicationForm");
const User = require("../../models/User");

const UpdateApplication = async(req,res)=>{
    const {id,useremail}=req.query;
    if (useremail !== req.user.useremail) {
        return res.status(403).send({msg : 'forbidden access'})
    }
    const query = { useremail: useremail }
    const getUser = await User.findOne(query)
    if (getUser?.role === 'admin') {
        return res.status(403).send({msg : 'forbidden access'})
    }
    const data = req.body;
    const result = await UpdateApplicationForm(id,data)
    res.send(result)
}
module.exports = UpdateApplication