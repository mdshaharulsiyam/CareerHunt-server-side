const InsertEnrollMentDB = require("../../lib/EnrollMent/InsertEnrollMentDB")

const InsertEnrollMent = async (req, res) => {
    const data = req.body;
    const result = await InsertEnrollMentDB(data)
    res.send(result)

}
module.exports = InsertEnrollMent