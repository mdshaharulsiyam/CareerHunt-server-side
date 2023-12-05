const { model, Schema } = require("mongoose");

const TeacherApplicationSchema = new Schema({
    'requestedUser': {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    'title': {
        type: String,
        required: true
    },
    'experience': {
        type: String,
        required: true
    },
    'category': {
        type: String,
        required: true
    },
    'status': {
        type: String,
        required: true
    },
    'msg': {
        type: String,
        required: false
    },
});

const TeacherApplicationModel = model('TeacherApplication', TeacherApplicationSchema);

module.exports = TeacherApplicationModel;
