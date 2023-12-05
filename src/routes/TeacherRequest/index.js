const SetTeacher = require('../../api/TeacherRequest/SetTeacher')
const TeacherRequest = require('../../api/TeacherRequest/TeacherRequest')
const UpdateRequest = require('../../api/TeacherRequest/UpdateRequest')
const requestCount = require('../../api/TeacherRequest/requestCount')
const verifyToken = require('../../middlewares/verifyToken')

const router = require('express').Router()
router.get('/allrequest',verifyToken,TeacherRequest)
router.get('/requestcount',requestCount)
router.patch('/allrequest',verifyToken,UpdateRequest)
router.patch('/setteacher',verifyToken,SetTeacher)
module.exports = router