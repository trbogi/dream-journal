const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require("body-parser")
const DreamModel = require('./models/Dream')
const { EmotionModel }= require('./models/Emotion')

mongoose.connect('mongodb+srv://trbogi:Pass8trbogi@cluster0.z5f1okn.mongodb.net/dream-journal?retryWrites=true&w=majority')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
  }

app.use(cors(corsOptions))

app.get('/getDreams', (req, res) => {
    DreamModel.find({}, (err, result) => {
        if (err){
            res.status(500).json(err)
        }else{
            res.json(result)
        }
    })
})

app.get('/getEmotions', (req, res) => {
    const emotions = EmotionModel.find()
    if (!emotions) return res.status(204).json({'message': 'No emotions found.'})
    res.json(emotions)
})

app.post('/newDream', async (req, res) => {
    if (!req?.body?.date || !req?.body?.title || !req?.body?.text ) {
        return res.status(400).json({ 'message': 'Date, title and text are required.' })
    }

    try {
        const result = await DreamModel.create({
            date: req.body.date,
            title: req.body.title,
            text: req.body.text,
            emotions: req.body.emotions
        });

        res.status(201).json(result)
    } catch (err) {
        console.error(err)
    }
})

app.delete('/delete/:id', async (req, res) => {
    if (!req?.params?.id) return res.status(400).json({ 'message': 'Dream ID required.' })

    const dream = await DreamModel.findOne({ _id: req.params.id }).exec()
    if (!dream) {
        return res.status(204).json({ "message": `No dream matches ID ${req.params.id}.` })
    }
    const result = await dream.deleteOne()
    res.json(result)
})

app.put('/edit/:id', async (req, res) => {
    if (!req?.params?.id) {
        return res.status(400).json({ 'message': 'ID parameter is required.' });
    }

    const dream = await DreamModel.findOne({ _id: req.params.id }).exec();
    if (!dream) {
        return res.status(204).json({ "message": `No dream matches ID ${req.params.id}.` });
    }
    if (req.body?.date) dream.date = req.body.date
    if (req.body?.title) dream.title = req.body.title
    if (req.body?.text) dream.text = req.body.text
    if (req.body?.emotions) dream.emotions = req.body.emotions
    const result = await dream.save();
    res.json(result);
})

app.listen(3001, () => {
    console.log('Server runs on port 3001')
})