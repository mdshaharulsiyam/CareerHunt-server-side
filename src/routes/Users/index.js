const AddContact = require('../../api/Contact/AddContact')
const DeleteContact = require('../../api/Contact/DeleteContact')
const GetCourse = require('../../api/Contact/GetCourse')
const AllUserCount = require('../../api/Users/AllUserCount')
const CreateUsers = require('../../api/Users/CreateUsers')
const GetAllUsers = require('../../api/Users/GetAllUsers')
const GetTeacher = require('../../api/Users/GetTeacher')
const GetUser = require('../../api/Users/GetUser')
const makeAdmin = require('../../api/Users/MakeAdmin')
const UpdateUser = require('../../api/Users/UpdateUser')
const verifyToken = require('../../middlewares/verifyToken')
const router = require('express').Router()
router.post('/user', CreateUsers)
router.post('/contact', AddContact)
router.get('/contact', GetCourse)
router.delete('/contact', DeleteContact)
router.get('/user', verifyToken, GetUser)
router.patch('/user', verifyToken, UpdateUser)
router.get('/teacher', GetTeacher)
router.get('/alluser', verifyToken, GetAllUsers)
router.get('/UserCount', AllUserCount)
router.patch('/makeadmin', verifyToken, makeAdmin)
module.exports = router