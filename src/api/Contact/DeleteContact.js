const Contact = require("../../models/Contact");

const DeleteContact = async (req, res) => {
    try {
        const { id } = req.query;
        const result = await Contact.deleteOne({ _id: id })
        if (result.acknowledged) {
            res.send({ success: true });
        }
    } catch (error) {
        res.send({ success: false, error: error });
    }
}
module.exports = DeleteContact