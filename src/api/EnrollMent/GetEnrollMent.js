const GetEnrollMentDB = require("../../lib/EnrollMent/GetEnrollMentDB");

const GetEnrollMent = async (req, res) => {
    const { useremail,id } = req.query;
    if (req.user.useremail !== useremail) {
        return res.status(403).send({ massage: 'forbidden acces' })
    }
    const result = await GetEnrollMentDB(id)
    res.send(result)
}
module.exports = GetEnrollMent