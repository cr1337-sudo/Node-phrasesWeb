const express = require('express')
const app = express()
const port = process.env.port || 3000
const phraseRoutes = require("./routes/phrase.routes")

const db = require("./db")
db()

app.use(express.json());
app.use(expresa.encodeuri());

//Routes
app.use("", phraseRoutes)
app.listen(port, () => console.log(`Example app listening on port port!`))