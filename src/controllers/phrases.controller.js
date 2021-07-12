const Phrase = require("../models/Phrase")

const index = (req, res) => {
   res.render("index")
}

const getPhrases = async (req, res) => {

   phrases = await Phrase.find()
   //Phrases desordenadas
   desor = phrases.sort(() => Math.random() - 0.5)
   res.json(desor)
}

const createPhrase = async (req, res) => {
   try {
      const { text } = req.body;
      console.log(text)
      const amount = await Phrase.find().countDocuments()

      const newPhrase = new Phrase({ text })
      newPhrase.text_number = amount
      const savedPhrase = await newPhrase.save()
      res.json(savedPhrase)
   } catch (e) {
      res.json({ error: "Envie un texto" })
   }
}

module.exports = { createPhrase, getPhrases, index }