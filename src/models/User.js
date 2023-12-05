const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
    
    'profileImage':{
        type:String ,
        required: true
    },
    "username":{
        type:String ,
        required: true
    },
    "useremail":{
        type:String ,
        required: true
    },
    "phone":{
        type:String,
        required : false
    },
    "role":{
        type:String ,
        required: true
    },
    "skils":{
        type:String ,
        required: false
    },
   
})


const User= model("User",UserSchema)

module.exports = User