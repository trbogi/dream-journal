const express = require('express')
const router = express.Router()
const { getEmotions } = require('../controllers/emotionsController')


router.get('/', getEmotions)

module.exports = router