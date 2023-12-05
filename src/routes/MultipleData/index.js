const WebsiteData = require('../../api/WebsiteData/WebsiteData')

const router = require('express').Router()
router.get('/totaldata',WebsiteData)
module.exports = router