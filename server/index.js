require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require("body-parser")
const dreamsRoutes = require('./routes/dreams')
const emotionsRoutes = require('./routes/emotions')

mongoose.connect(process.env.DB)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
  }

app.use(cors(corsOptions))

app.use('/api/dreams', dreamsRoutes)

app.use('api/emotions', emotionsRoutes)

app.listen(process.env.PORT, () => {
    console.log('Server runs on port' + process.env.PORT)
})