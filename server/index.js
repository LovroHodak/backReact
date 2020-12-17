const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./config/db.config')
const movieRouter = require('./routes/movie.routes')

require('dotenv').config()

const app = express()
//const apiPort = 5000
const port = process.env.PORT

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', movieRouter)

app.listen(port, () => console.log(`Server running on port ${port}`))