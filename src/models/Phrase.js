const { Schema, model } = require("mongoose");

const phraseSchema = new Schema({
   text: {
      type: String,
      required: true,
   },
   text_number: {
      type: Number,
      default: 0
   }
})

module.exports = model("PhraseSchema", phraseSchema)