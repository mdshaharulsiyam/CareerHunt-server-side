const ClearCookie = require('../../api/Authenticatoin/ClearCookie')
const CookieToken = require('../../api/Authenticatoin/cookieToken')
const router = require('express').Router()
router.post('/jwt', CookieToken)
router.post('/clearjwt',ClearCookie)
module.exports = router