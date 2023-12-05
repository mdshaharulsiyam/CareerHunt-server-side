const Contact = require("../../models/Contact");

const AddContact = async (req, res) => {
    try {
        const data = req.body;
        const result = await Contact.create(data)
        if (result._doc._id) {
            res.send({ success: true });
        }
    } catch (error) {
        res.send({ success: false, error: error });
    }
}
module.exports = AddContact