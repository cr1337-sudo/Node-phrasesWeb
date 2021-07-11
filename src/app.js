const express = require('express')
const app = express()
const port = process.env.port || 3000
const phraseRoutes = require("./routes/phrase.routes")
const path = require("path")
const db = require("./db")

//Dtabase
db()

//Views & static
app.set("views", path.join(__dirname, "./views"))
app.set(express.static(path.join(__dirname, "./static")))

//Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))//Recibe datos unicamente strings o arrays

//Routes
app.use("", phraseRoutes)

app.listen(port, () => console.log(`Example app listening on port port!`))