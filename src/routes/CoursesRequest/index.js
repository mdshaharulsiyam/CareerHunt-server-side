const ApproveCoursesRequest = require('../../api/coursesRequest/ApproveCoursesRequest')
const CourseCount = require('../../api/coursesRequest/CourseCount')
const DeleteRequest = require('../../api/coursesRequest/DeleteRequest')
const GetAllCourse = require('../../api/coursesRequest/GetAllCourse')
const verifyToken = require('../../middlewares/verifyToken')

const router = require('express').Router()
router.patch('/coursesrequest',verifyToken,ApproveCoursesRequest)
router.delete('/coursesrequest',verifyToken,DeleteRequest)
router.get('/allcourse',verifyToken,GetAllCourse)
router.get('/courseCount',CourseCount)
module.exports = router