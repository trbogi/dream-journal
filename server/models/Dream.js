const mongoose = require('mongoose')
const {EmotionSchema} = require('./Emotion')

const DreamSchema = new mongoose.Schema({
        date: {
            type: Date,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        emotions: {
            type: [EmotionSchema]
        }
})

const DreamModel = mongoose.model('dreams', DreamSchema)
module.exports = DreamModel