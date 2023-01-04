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

app.delete('/delete/:id', (req, res) => {
    if (!req.params.id) res.status(404).json({'message': 'Id required.'})
    DreamModel.deleteOne({ _id : req.params.id }, (err, result) => {
        if (err) res.status(500).json({'message': 'Deletion was not successful'})
    })
})

app.listen(3001, () => {
    console.log('Server runs on port 3001')
})