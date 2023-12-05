const { model, Schema } = require('mongoose')
const EnrollMentSchema = new Schema({
    "student": {
        type: Schema.Types.ObjectId,
        ref: 'User'

    },
    "course": {
        type: Schema.Types.ObjectId,
        ref: 'Course'

    },
    "TransactionId": {
        type: String,
        required: true
    }

})
const Enroll = model('enroll', EnrollMentSchema)
module.exports = Enroll