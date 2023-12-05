const GetSingleEnrollDB = require("../../lib/EnrollMent/GetSingleEnrollDB");

const GetSingleEnroll = async (req, res) => {
    const { useremail, id,student} = req.query;
    if (req.user.useremail !== useremail) {
        return res.status(403).send({ massage: 'forbidden acces' })
    }
    const result = await GetSingleEnrollDB(id,student)
    res.send(result)
}
module.exports = GetSingleEnroll