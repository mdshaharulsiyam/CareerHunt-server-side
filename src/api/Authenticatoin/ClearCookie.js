const ClearCookie = async (req, res) => {
    res.clearCookie('tocken', { maxAge: 0 })
        .send({ succes: true })
}
module.exports = ClearCookie