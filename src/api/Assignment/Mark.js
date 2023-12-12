const MarkDB = require("../../lib/Assignment/MarkDB");

const Mark = async (req, res) => {
    const { useremail, id } = req.query;
    if (req.user.useremail !== useremail) {
        return res.status(403).send({ massage: 'forbidden acces' })
    }
    const data = req.body
    const result = await MarkDB(id,data)
    res.send(result)
}
module.exports = Mark