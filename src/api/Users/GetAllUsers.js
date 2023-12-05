const GetAllUserDB = require("../../lib/CreateUser/GetAllUserDB");

const GetAllUsers = async (req, res) => {
    const { useremail,seacrhValue,itemPerPage,pageNumber } = req.query;
    if (req.user.useremail !== useremail) {
        return res.status(403).send({ massage: 'forbidden acces' })
    }
    const result = await GetAllUserDB(useremail,seacrhValue,itemPerPage,pageNumber)
    res.send(result)
}
module.exports = GetAllUsers