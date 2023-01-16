const express = require('express')
const router = express.Router()
const DreamModel = require('../models/Dream')
const { getDreams,
        getDreamById,
        addDream,
        deleteDream,
        updateDream } = require('../controllers/dreamsController')

router.get('/', getDreams)

router.post('/', addDream)

router.get('/:id', getDreamById)

router.put('/:id', updateDream)

router.delete('/:id', deleteDream)

module.exports = router