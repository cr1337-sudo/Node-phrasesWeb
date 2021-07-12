const { Router } = require("express");
const router = Router()
const phrasesCtr = require("../controllers/phrases.controller")

router.get("/home", phrasesCtr.index)
router.post("/", phrasesCtr.createPhrase)
router.get("/", phrasesCtr.getPhrases)

module.exports = router