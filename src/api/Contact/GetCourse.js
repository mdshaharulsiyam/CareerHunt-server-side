const Contact = require("../../models/Contact");
const GetCourse = async (req, res) => {
    try {
        const result = await Contact.find({})
        res.send(result)
    } catch (error) {
        res.send({ success: false, error: error });
    }
}
module.exports = GetCourse