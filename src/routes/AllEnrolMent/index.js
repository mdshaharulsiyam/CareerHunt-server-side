const GetEnrollMent = require('../../api/EnrollMent/GetEnrollMent')
const GetSingleEnroll = require('../../api/EnrollMent/GetSingleEnroll')
const InsertEnrollMent = require('../../api/EnrollMent/InsertEnrollMent')
const verifyToken = require('../../middlewares/verifyToken')

const router = require('express').Router()
router.post('/enroll',verifyToken,InsertEnrollMent)
router.get('/enroll',verifyToken,GetEnrollMent)
router.get('/singleenroll',verifyToken,GetSingleEnroll)
module.exports = router