const DreamModel = require("../models/Dream")

const getDreams = (req, res) => {
    DreamModel.find({}, (err, result) => {
        if (err){
            res.status(500).json(err)
        }else{
            res.json(result)
        }
    })
}

const getDreamById = async (req, res) => {
    const id = req?.params?.id
    if (!id) {
        return res.status(400).json({'message': `ID is required.`})
    }
    const dream = await DreamModel.findById(id)

    if (!dream) {
        return res.status(404).json({'message': `No dream with ID ${id} found,`})
    }
    res.json(dream)
}

const addDream = async (req, res) => {
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
}

const updateDream = async (req, res) => {
    if (!req?.params?.id) {
        return res.status(400).json({ 'message': 'ID parameter is required.' })
    }

    const dream = await DreamModel.findOne({ _id: req.params.id }).exec()
    if (!dream) {
        return res.status(404).json({ "message": `No dream matches ID ${req.params.id}.` })
    }
    if (req.body?.date) dream.date = req.body.date
    if (req.body?.title) dream.title = req.body.title
    if (req.body?.text) dream.text = req.body.text
    if (req.body?.emotions) dream.emotions = req.body.emotions
    const result = await dream.save()
    res.json(result);
}

const deleteDream = async (req, res) => {
    if (!req?.params?.id) return res.status(400).json({ 'message': 'Dream ID required.' })

    const dream = await DreamModel.findOne({ _id: req.params.id }).exec()
    if (!dream) {
        return res.status(404).json({ "message": `No dream matches ID ${req.params.id}.` })
    }
    const result = await dream.deleteOne()
    res.json(result)
}

module.exports = { 
    getDreams,
    getDreamById,
    addDream,
    updateDream,
    deleteDream
}