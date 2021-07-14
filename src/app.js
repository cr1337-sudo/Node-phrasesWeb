const express = require('express')
const app = express()
const port = process.env.port || 3000
const phraseRoutes = require("./routes/phrase.routes")
const path = require("path")
const exphbs = require('express-handlebars');
const db = require("./db")
//const morgan = require('morgan')


//Dtabase
db()

//Views
app.set("views", path.join(__dirname, "./views"))

app.engine('.hbs', exphbs({
   defaultLayout: null,
   extname: ".hbs"
}));
//Configuracion para que .hbs sea la extension de los templates
app.set('view engine', '.hbs');

//Static
app.use(express.static(path.join(__dirname, "./public")))

//Middlewares
//app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))//Recibe datos unicamente strings o arrays

//Routes
app.use("", phraseRoutes)

app.listen(port, () => console.log(`Example app listening on port port!`))
