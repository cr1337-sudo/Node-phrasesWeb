const { Router } = require("express");
const router = Router()
const phrasesCtr = require("../controllers/phrases.controller")

router.post("/", phrasesCtr.createPhrase)
router.get("/", phrasesCtr.getPhrases)

module.exports = router