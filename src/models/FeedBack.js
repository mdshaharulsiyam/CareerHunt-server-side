const { model, Schema } = require("mongoose");

const FeedBackSchema = new Schema({
    "course": {
        type: Schema.Types.ObjectId,
        ref: 'Course'

    },
    "title": {
        type: String,
        required: true
    },
    "username": {
        type: String,
        required: true
    },
    "userimage": {
        type: String,
        required: true
    },
    "rating": {
        type: String,
        required: Number
    },
    "description": {
        type: String,
        required: true
    },
})
const FeedBack = model("FeedBack", FeedBackSchema)

module.exports = FeedBack


