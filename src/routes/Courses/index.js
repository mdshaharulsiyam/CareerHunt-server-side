const AddCourse = require('../../api/Courses/AddCourse')
const BestCourses = require('../../api/Courses/BestCourses')
const CourseCount = require('../../api/Courses/CourseCount')
const GetAllCourses = require('../../api/Courses/GetAllCourses')
const SingleCourse = require('../../api/Courses/SingleCourse')
const UpdateCourse = require('../../api/Courses/UpdateCourse')
const verifyToken = require('../../middlewares/verifyToken')

const router = require('express').Router()
router.get('/courses',GetAllCourses)
router.get('/bestcourses',BestCourses)
router.get('/singlecourse',SingleCourse)
router.post('/courses',verifyToken,AddCourse)
router.patch('/courses',verifyToken,UpdateCourse)
router.get('/courseCount',CourseCount)
module.exports = router


