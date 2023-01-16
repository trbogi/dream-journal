const express = require('express')
const router = express.Router()
const { EmotionModel } = require('../models/Emotion')


router.get('/', (req, res) => {
    const emotions = EmotionModel.find()
    if (!emotions) return res.status(204).json({'message': 'No emotions found.'})
    res.json(emotions)
})

module.exports = router