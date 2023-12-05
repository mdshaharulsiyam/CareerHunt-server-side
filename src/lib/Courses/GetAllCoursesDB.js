const Course = require("../../models/Courses")

const GetAllCoursesDB = async (limit, search) => {
    try {
        const query = { status: 'approved' };
        if (search && search.trim() !== '') {
            query.title = new RegExp(search, 'i');
        }
        return await Course.find(query)
            .limit(parseInt(limit * 9))
            .populate({
                path: 'teacher',
                select: '_id username'
            })
            .select('title price img totalenroll teacher description status');
    } catch (error) {
        return { success: false, error: error };
    }
}
module.exports = GetAllCoursesDB