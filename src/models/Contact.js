const { model, Schema } = require("mongoose");

const ContactSchema = new Schema({

    "msg": {
        type: String,
        required: true
    },
    "username": {
        type: String,
        required: true
    },
    "useremail": {
        type: String,
        required: true
    }
})


const Contact = model("Contact", ContactSchema)

module.exports = Contact