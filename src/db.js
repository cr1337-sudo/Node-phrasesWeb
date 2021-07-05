const mongoose = require("mongoose");

const db = mongoose.connect('mongodb://127.0.0.1:27017/phrasesWeb', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, })
   .then(db => console.log("Db is connected"))
   .catch(e => console.log(e))

module.exports = db