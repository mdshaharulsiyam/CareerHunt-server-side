const User = require("../../models/User")

const GetUserData =async(useremail)=>{
  try {
    const query = { useremail: useremail }
    return await User.findOne(query)
  } catch (error) {
    return { success: false, error: error };
  }
}
module.exports = GetUserData