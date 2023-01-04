const express = require('express')
const app = express()
const mongoose = require('mongoose')
const DreamModel = require('./models/Dream')
const { EmotionModel }= require('./models/Emotion')

mongoose.connect('mongodb+srv://trbogi:Pass8trbogi@cluster0.z5f1okn.mongodb.net/dream-journal?retryWrites=true&w=majority')

app.use(express.json())

app.get('/getDreams', (req, res) => {
    DreamModel.find({}, (err, result) => {
        if (err){
            res.json(err)
        }else{
            res.json(result)
        }
    })
})

app.get('/getEmotions', (req, res) => {
    EmotionModel.find({}, (err, result) => {
        if (err){
            res.json(err)
        }else{
            res.json(result)
        }
    })
})

app.post('/newDream', async (req, res) => {
    const newDream = new DreamModel(req.body)
    await newDream.save()

    res.json(req.body)
})

app.listen(3001, () => {
    console.log('Server runs on port 3001')
})