/* Libs */
const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser")

/* Exec */
const app = express()

/* Routes */
const passRouter = require('./routes/password')
const PORT = 9000

/* Add functionality to express */
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/pass', passRouter)

/* Server */
app.listen(PORT)