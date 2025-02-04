require('dotenv').config()

const express = require('express')
const configViewEngine = require('./config/viewEngine')

const app = express()
const webRoute = require("./routes/web")

const port = process.env.PORT || 8888
const hostname = process.env.HOST_NAME

// config template engine
configViewEngine(app)

// Khai báo route
app.use('/v1', webRoute)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
