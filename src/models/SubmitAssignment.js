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
    "submittime": {
        type: String,
        required: false

    },
    "link": {
        type: String,
        required: false

    }
})
const SubmitAssignment = model("SubmitAssignment", SubmitAssignmentSchema)

module.exports = SubmitAssignment
