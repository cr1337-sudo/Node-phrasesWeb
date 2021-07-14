const { Router } = require("express");
const router = Router()
const phrasesCtr = require("../controllers/phrases.controller")

router.get("/", phrasesCtr.index)
router.post("/api", phrasesCtr.createPhrase)
router.get("/api", phrasesCtr.getPhrases)

module.exports = router