const mongoose = require('mongoose')

const EmotionSchema = new mongoose.Schema({
       label: {
        type: String,
        required: true
       }
})

const EmotionModel = mongoose.model('emotions', EmotionSchema)

module.exports = {EmotionSchema, EmotionModel}