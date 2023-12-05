const GetApplicationData = require('../../api/TeacherApllication/GetApplicationData')
const TeacherApllication = require('../../api/TeacherApllication/TeacherApllication')
const UpdateApplication = require('../../api/TeacherApllication/UpdateApplication')
const verifyToken = require('../../middlewares/verifyToken')
const router = require('express').Router()
router.post('/teacthersaplication',verifyToken,TeacherApllication)
router.get('/teacthersaplication',verifyToken,GetApplicationData)
router.patch('/teacthersaplication',verifyToken,UpdateApplication)
module.exports = router