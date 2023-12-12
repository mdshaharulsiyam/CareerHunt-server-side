const { model, Schema } = require("mongoose");

const SubmitAssignmentSchema = new Schema({
    "assignment": {
        type: Schema.Types.ObjectId,
        ref: 'Assignment'

    },
    "course": {
        type: Schema.Types.ObjectId,
        ref: 'Course'

    },
    "student": {
        type: Schema.Types.ObjectId,
        ref: 'User'

    },
    "submittime": {
        type: String,
        required: false

    },
    "status": {
        type: String,
        default: 'pending'

    },
    "marks": {
        type: Number,
        required: false
    },
    "link": {
        type: String,
        required: false

    }
})
const SubmitAssignment = model("SubmitAssignment", SubmitAssignmentSchema)

module.exports = SubmitAssignment
