const express = require('express')
const app = express()
const port = process.env.port || 3000
const db = require("./db")
const phraseRoutes = require("./routes/phrase.routes")

db



app.use(express.json())

//Routes
app.use("", phraseRoutes)
app.listen(port, () => console.log(`Example app listening on port port!`))