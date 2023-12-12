const verifyToken = require('../../middlewares/verifyToken')
const Assignment =require('../../api/Assignment/Assignment')
const AddAssignment = require('../../api/Assignment/AddAssignment')
const CourceSammery = require('../../api/Assignment/CourceSammery')
const SubmitAssignment = require('../../api/Assignment/SubmitAssignment')
const GetSubmitedAssignment = require('../../api/Assignment/GetSubmitedAssignment')
const router = require('express').Router()
router.get('/assignments',verifyToken,Assignment)
router.post('/assignments',verifyToken,AddAssignment)
router.get('/coursesammery',verifyToken,CourceSammery)
router.post('/suubmit',verifyToken,SubmitAssignment)
router.get('/suubmitedassignment',verifyToken,GetSubmitedAssignment)
module.exports = router