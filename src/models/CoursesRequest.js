const { model, Schema } = require("mongoose");

const CoursesRequestSchema = new Schema({
    "teacher": {
        type: String,
        required: true

    },
    "title": {
        type: String,
        required: true
    },
    'img': {
        type: String,
        required: true
    },
    "price": {
        type: Number,
        required: true
    },

    "useremail": {
        type: String,
        required: true
    },
    "description": {
        type: String,
        required: true
    },
    "status": {
        type: String,
        required: false
    },
})


const CoursesRequest = model("CoursesRequest", CoursesRequestSchema)

module.exports = CoursesRequest