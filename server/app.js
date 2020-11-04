require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routes/index')
const { errorHandler } = require('./middlewares/errorHandler')

const port = process.env.PORT

app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.use(routes)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`App running on port ${port}`);
})