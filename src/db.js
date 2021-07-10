const mongoose = require("mongoose");
const env = require("../env")

const db = () => {
   try {
      mongoose.connect(env.uri, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
         console.log("connected"));
   } catch (error) {
      console.log("could not connect");
   }
}

module.exports = db