const { EmotionModel, EmotionSchema } = require('../models/Emotion')

const getEmotions = async (req, res) => {
    const emotions = await EmotionModel.find()
    if (!emotions) return res.status(204).json({'message': 'No emotions found.'})
    res.json(emotions)
}

module.exports = { getEmotions }