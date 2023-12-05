const MakeAdminDB = require("../../lib/CreateUser/MakeAdminDB")

const makeAdmin = async (req, res) => {
    const { useremail } = req.query
    if (req.user.useremail !== useremail) {
        return res.status(403).send({ massage: 'forbidden acces' })
    }
    const {id}=req.body
    const result = await MakeAdminDB(useremail,id)
    res.send(result)
}
module.exports = makeAdmin