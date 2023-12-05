const Course = require("../../models/Courses");
const User = require("../../models/User");

const GetAllCoursesDB = async (filter, pageNumber, itemPerPage, useremail) => {
    let query = { status: filter };

    try {
        const getUser = await User.findOne({ useremail: useremail });
        if (getUser?.role === 'admin') {
            return await Course.find(query)
                .skip(parseInt(pageNumber) * parseInt(itemPerPage))
                .limit(parseInt(itemPerPage))
                .populate({
                    path: 'teacher',
                    select: '_id useremail'
                })
                .select('title price img totalenroll teacher description status');
        }

        if (getUser?.role === 'teacher') {
            query.teacher = getUser?._id;
            return await Course.find(query)
                .populate({
                    path: 'teacher',
                    select: '_id useremail'
                })
                .select('title price img totalenroll teacher description status');
        }
        return { status: 403, msg: 'Forbidden access' };
    } catch (error) {
        return { success: false, error: error };
    }
};

module.exports = GetAllCoursesDB;
