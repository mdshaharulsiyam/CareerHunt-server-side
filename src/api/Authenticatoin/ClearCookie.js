const ClearCookie = async (req, res) => {
    console.log('removing coockie')
    res.clearCookie('tocken', { maxAge: 0 })
        .send({ succes: true })
}
module.exports = ClearCookie