const { model, Schema } = require("mongoose");

const CoursesSchema = new Schema({
    "teacher": {
        type: Schema.Types.ObjectId,
        ref: 'User'

    },
    "title": {
        type: String,
        required: true
    },
    "price": {
        type: Number,
        required: true
    },
    'img': {
        type: String,
        required: true
    },
    "description": {
        type: String,
        required: true
    },
    "totalenroll": {
        type: Number,
        required: false
    },
    "totalassignment": {
        type: Number,
        default : 0
    },
    "status": {
        type: String,
        required: false
    }
})


const Course = model("Course", CoursesSchema)

module.exports = Course



