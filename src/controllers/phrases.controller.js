const Phrase = require("../models/Phrase")

const createPhrase = async (req, res) => {
   try {

      const { name, text } = req.body;
      console.log(text)
      const amount = await Phrase.find().countDocuments()

      const newPhrase = new Phrase({ name, text })
      newPhrase.text_number = amount
      const savedPhrase = await newPhrase.save()
      res.json(savedPhrase)
   } catch (e) {
      res.json({ error: "Envie un texto" })
   }
}

const getPhrases = async (req, res) => {

   phrases = await Phrase.find()

   //Phrases desordenadas
   desor = phrases.sort(() => Math.random() - 0.5)

   res.json(desor)
}

module.exports = { createPhrase, getPhrases }