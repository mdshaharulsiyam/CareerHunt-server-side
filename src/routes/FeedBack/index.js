const DeleteFeedback = require('../../api/FeedBack/DeleteFeedback')
const FeedBack = require('../../api/FeedBack/FeedBack')
const GetFeedBacks = require('../../api/FeedBack/GetFeedBacks')
const GetFeedback = require('../../api/FeedBack/GetFeedback')
const verifyToken = require('../../middlewares/verifyToken')

const router = require('express').Router()
router.post('/feedback',verifyToken,FeedBack)
router.get('/feedback',GetFeedback)
router.get('/feedbacks',verifyToken,GetFeedBacks)
router.delete('/feedbacks',verifyToken,DeleteFeedback)
module.exports = router