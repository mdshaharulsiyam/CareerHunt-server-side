const { model, Schema } = require("mongoose");

const AssignmentSchema = new Schema({
    "teacher": {
        type: Schema.Types.ObjectId,
        ref: 'User'

    },
    "title": {
        type: String,
        required: true
    },
    "deadline": {
        type: String,
        required: true

    },
    "description": {
        type: String,
        required: true
    },
    "course": {
        type: Schema.Types.ObjectId,
        ref:'Course'
    }
})


const Assignment = model("Assignment", AssignmentSchema)

module.exports = Assignment
