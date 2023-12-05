const CourceSammeryDB = require("../../lib/Assignment/CourceSammeryDB");

const CourceSammery=async (req,res)=>{
    const { useremail,id ,targetDate} = req.query;
    if (req.user.useremail !== useremail) {
        return res.status(403).send({ massage: 'forbidden acces' })
    }
    const result = await CourceSammeryDB(id,targetDate)
      res.send(result)
}
module.exports = CourceSammery